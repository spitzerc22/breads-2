const React = require('react')
const Default = require('./layout/Default')

function Show ({bread, index}) {
    return (
        <Default>
            <h2>SHOW PAGE</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten ? <span> does </span> : <span> does NOT </span>
                }
                have gluten!
            </p>
            <img src={bread.image} alt={bread.name}/>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE"/>
            </form>
            <li>
                <a href="/breads">Go Home</a>
                <a href={`/breads/${index}edit`}>Edit Bread</a>
            </li>
        </Default>
    )
}

module.exports = Show