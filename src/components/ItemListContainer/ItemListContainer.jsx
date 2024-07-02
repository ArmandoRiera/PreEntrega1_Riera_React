import React from 'react'

const categories = [
    { id: 1, name: 'Arma de Astas', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoDF0SVTuDibtUXg2pup2FFt_FUcOuwrt3Q&s" },
    { id: 2, name: 'Ballestas', img: "https://gameslantern.com/storage/sites/darkanddarker/weapons/fYPao0QLFn6qLB9xDldCCmN7dqxCKwGvG81jf1rf.png" },
    { id: 3, name: 'Escudos', img: "https://gameslantern.com/storage/sites/darkanddarker/weapons/7YhRhclTPmchDeW48m2tjkC6HG2AW3LEurgLsLSX.png" },
    { id: 4, name: 'Espadas', img: "https://darkanddarker.gameslantern.com/storage/sites/darkanddarker/weapons/H86nyKMhYV8LFkXt2NrjwtsxFVGXwZSmu5yra9Qs.png" },
    { id: 5, name: 'Hachas', img: "https://gameslantern.com/storage/sites/darkanddarker/weapons/9hsBx9B7txbGpFfYhDKLDkSdfh1vuztpww54cFXo.png" },
    { id: 6, name: 'Mazas', img: "https://darkanddarker.gameslantern.com/storage/uploads/editor/images/PccXixiLKhX3Ny2rij8LH5EgCrH6WJJXyoWSkHoI.png" },
]

function ItemListContainer({ greetings }) {
    console.log(categories)
    return (
        <>
            <div className="card">
                <h2>{greetings}</h2>
                <ul className="list-group">
                    {categories.map((category) =>
                    (<li className="list-group-item" key={category.id}>
                        {category.name}
                        <img src={category.img} alt={category.name} />
                    </li>)
                    )}
                </ul>
            </div>
        </>
    )
}

export default ItemListContainer