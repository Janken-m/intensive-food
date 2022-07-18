const categories = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Fruit" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Snacks" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Vegetables" },
  ];
  
  export function getCategories() {
    return categories;
  }


  const currentPage = [
    {id : 1, active : false},
    {id : 2, active : false},
    {id : 3, active : false}
  ];

  export function getCurrentPage(){
    return currentPage;
  }