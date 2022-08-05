import React from 'react';

function FoodForm({match}) {
    return (
        <div>
            <h1>
                Food Form {match.params.id}
            </h1>
        </div>
    );
}

export default FoodForm;