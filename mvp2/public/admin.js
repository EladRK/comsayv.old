/**
 * Created by elad.katz on 31/03/2016.
 */
var myApp = angular.module('myApp', ['ng-admin']);
myApp.config(['NgAdminConfigurationProvider', function (nga) {

    var admin = nga.application('My First Admin')
        .baseApiUrl('http://localhost:6007/api/v1/products');

    var product = nga.entity('products').identifier(nga.field('_id'));
    var category = nga.entity('categories').identifier(nga.field('_id'));

    product.listView().fields([
        nga.field('name').isDetailLink(true),
        nga.field('category'),
        nga.field('price'),
        nga.field('columns'),
        nga.field('type')
    ]);

    category.listView().fields([
        nga.field('name')
    ]);

    category.creationView().fields([
        nga.field('name')
    ]);

    product.creationView().fields([
        nga.field('name'),
        nga.field('category'),
        nga.field('price'),
        nga.field('columns'),
        nga.field('type')
    ]);

    product.editionView().fields(product.creationView().fields());

    product.showView().fields([
        nga.field('name'),
        nga.field('category'),
        nga.field('price'),
        nga.field('columns'),
        nga.field('type')
    ]);

    //post.showView().fields([
    //    nga.field('title'),
    //    nga.field('body', 'text'),
    //    nga.field('userId', 'reference')
    //        .targetEntity(user)
    //        .targetField(nga.field('username'))
    //        .label('User'),
    //    nga.field('comments', 'referenced_list')
    //        .targetEntity(nga.entity('comments'))
    //        .targetReferenceField('postId')
    //        .targetFields([
    //            nga.field('email'),
    //            nga.field('name')
    //        ])
    //        .sortField('id')
    //        .sortDir('DESC'),
    //]);


    admin.addEntity(category);
    admin.addEntity(product);


    //
    //var admin = nga.application('My First Admin')
    //    .baseApiUrl('http://jsonplaceholder.typicode.com/');
    //var user = nga.entity('users');
    //user.listView().fields([
    //    nga.field('name'),
    //    nga.field('username'),
    //    nga.field('email')
    //]);
    //admin.addEntity(user)



    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);