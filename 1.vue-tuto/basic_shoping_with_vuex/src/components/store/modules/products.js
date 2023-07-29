export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description: 'A collection of must-read books. All-time classics included!',
          price: 99.99
        },
        {
          id: 'p2',
          image:
            'https://images.unsplash.com/photo-1568112505330-f5fa78411f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&w=1000&q=80',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description: 'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        }
      ]
    }
  },
  /* we dont directly access state thats why we need getters on kind of they
  provide the date you can use anywhere where you need this products */
  getters: {
    products(state) {
      return state.products
    }
  }
}
