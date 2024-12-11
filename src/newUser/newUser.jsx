import React from 'react';
import { NewUserForm } from './newUserForm';

export function NewUser() {
    return (
        <main className="bg-light d-flex flex-column container-fluid text-center">
            <NewUserForm />
        </main>
    );
}