import React from 'react';

const Form = props => (
    <form className="Form" onSubmit={props.getOwnedGames}>
        <input type="text" name="steamId" placeholder="eg. 76561197980934566"/>
        <button>Search</button>
    </form>
);

export default Form;
