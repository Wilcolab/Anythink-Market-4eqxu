use myFirstDatabase;
var userId = db.users.findOne({},{_id : 1});
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
    seller: userId._id,
    __v: 1,
    comments: []
  });
}
