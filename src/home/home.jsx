import React from 'react';
import "./home.css";

export function Home() {
    return (
        <main className="bg-lightbg-lightcolumn container-fluid text-center" display="flex-column">
        <div className="row justify-content-evenly">
            <section className="card shadow-lg col-5 border border-2 border-secondary" >
                <div className="card-body">
                    <h3 className="card-title">Test Your Password Strength!</h3>
                    <div className="row justify-content-center">
                        <StrengthTester/>
                    </div>
                </div>
            </section>
            <section className="card shadow-lg col-5 border border-secondary border-2">
                <div className="card-body">
                    <h3 className="card-title">Generate a Passphrase</h3>
                    <div><button className="btn btn-primary">Generate</button></div>
                    <div className="card-text">Memory Tip: ....</div>
                </div>
            </section>
            
        </div>
    </main>
    );
}

const StrengthTester = () => {
    const [text, updateText] = React.useState('');
  
    const onChange = (e) => {
      updateText(e.target.value);
    };
    return (
      <div>
        <div className="col-md-6" id='inputWrapper'>
          <input
            className='form-control my-3 align-self-center'
            type='text'
            onChange={(e) => onChange(e)}
            placeholder='Your Password Here'
            id='passwordTester'
          />
        </div>
        
        <PasswordEvaluation answer={text} />

      </div>
    );
  };
  
  const PasswordEvaluation = ({ answer }) => {
    const result = zxcvbn(answer);
    let strength = ''
    switch(result.score) {
        case(0):
            strength = <span className='badge text-bg-danger' id='veryWeak'>Very Weak</span>;
            break;
        case(1):
            strength = <span className='badge text-bg-orange' id='Weak'>Weak</span>;
            break;
        case(2):
            strength = <span className='badge text-bg-warning' id='moderatelyWeak'>Moderately Weak</span>
            break;
        case(3):
            strength = <span className='badge text-bg-primary' id='strong'>Strong</span>
            break;
        case(4):
            strength = <span className='badge text-bg-success' id='veryStrong'>Very Strong</span>
            break;
        default:
            strength = <span className='badge text-bg-' id='veryWeak'>This password is very bad</span>
            break;
        
    }
    return (
      <div>
        <p><strong>Password Strength: </strong>{strength}</p>
        <p><strong>Time to Crack: </strong>{result.crack_times_display.offline_slow_hashing_1e4_per_second}</p>
      </div>
    );
  };