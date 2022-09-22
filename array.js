const product = [
    {
        name: 'book',
        inventory: 4,
        price:5000

    },

    {
        name: 'laptop',
        inventory: 2,
        price:400

    },

    {
        name: 'manitor',
        inventory: 9,
        price:50
    },

    {
        name: 'keyboard',
        inventory: 5,
        price:1000
    },

    {
        name: 'cd',
        inventory: 8,
        price:3
    },

    {
        name: 'cable',
        inventory: 6,
        price:700
    },
];


let n = product.findIndex(item => item.name=='book')
{
    delete product[n];
} 
console.table(product)


let f=product.filter(function(item) {
    if ((item.inventory>=2)&&(item.price>=1000)){
       return item.inventory 
    }
})
console.table(f)
