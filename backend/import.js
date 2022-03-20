use myFirstDatabase;
for (var i=0; i<=500; i++){
   db.items.insertOne({
    slug: 'nike-shoes' + i,
    title: 'Nike Shoes ' + i ,
    description: 'Nike Shoes ' + i ,
    image: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    tagList: [ 'shoes' ],
    favorited: false,
    favoritesCount: 0,
    seller: ObjectId("623334a0ba168962cb11c56a"),
    __v: 1,
    comments: []
  });
}
