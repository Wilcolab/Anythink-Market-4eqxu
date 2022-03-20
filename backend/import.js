for (var i=0; i<=500; i++){
db.users.insertOne({
role: 'user',
  favorites: [ ObjectId("62333be34bfbc5c5d55c4341") ],
  following: [],
  username: 'pavel' + i,
  email: 'pavel.duchovny@mongodb.com',
  salt: '28a1058cce1bf8093d714209f70f199a',
  hash: 'c2edaa4ede5882c20873f1e9b0c00a6fd1e8c85b31ef750968a98e5053cbfa1f49619271479ba5480d004c77d03744e258da2be30a951d3e637597d15fb5cf0f60d59de796e94bf7cc584c4c81b2e52b6aae00c5b14c15afd83c966227255f2a43f8a50d40e4f062562bb0494d16dcec72aeb9b1ac597a3733488e5d4acb621aa6c8aa25a736b16694eefd88c485bc6343f6a683cdcdfc38e42dbfb8edb293c2c7fba198629a465c5a4ec39a391efd559cc781f195a5450e4629ef7aca87cd5ca94804d9e58971b43db5c20618cd5c32596849bba169d8116726b585a178b2d4f4d1e329fba0d2fa1096210845ab54b2428022af5f851474241012396c3b5e6ce8c035068e166bf1f7c8c9edb4511efc91e5778bcf9f180a47e39af6bfbad24bbce6379e3894f2ea3f471b0d53b5a8ebc7d31f7bae9217b1c697787eb1f27b06dc9ba25685e375fd3ce30bb2a10482167b6021481475893aa7c596f18724fe3c42fad9c3621815c9ed933f832f658c4846ba37736fd4e80e6d51c4172f3e0671f4a2d1f37a225217f532dc64ada99374afd858d145b3549523c59b40b7447b46e0f13ba9b6e95cadac16953b924df7fe1864762f1fb2de6ce01f5e5d191f2a5b19461ba0c72a715373fdae9167cc86cbf25ad584e1afddcc073be0439586a3c8c53323ff33990507b668706ede234e12a1a6b5f839720f31dfab651224313648',
  createdAt: new Date(),
  updatedAt: new Date(),
  __v: 1,
  image: '' });
var userId = db.users.findOne({},{_id : 1});
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
var itemId = db.items.findOne({},{_id : 1});
db.comments.insertOne({body : "Nice Comment" + i, seller : userId._id, item: itemId._id
    
});
}
