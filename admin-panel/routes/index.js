var express = require('express');
//var checkAuth = require('../middleware/checkAuth');
//var checkAdmin = require('../middleware/checkAdmin');
//var Category = require('../models/category').Category;
var router = express.Router();
var bodyParser=require('body-parser');
//var loadCatalog = require('../middleware/loadCatalogTree');
var breadcrumbs = require('express-breadcrumbs');
//var Product = require('../models/product').Product;

// Главная страница
// router.get('/',breadcrumbs.setHome({
//   name: 'Главная',
//   url: '/'
// }), require('./testmainpage').get); //./mainpage
/*
// Загрузка страницы авторизации
router.get('/login', require('./login').get);

// Обработка запроса на авторизацию с формы на сайте
router.post('/login', require('./login').post);

// Обработка запроса на выход из аккаунта на сайте
router.post('/logout', require('./logout').post);

// Страница личного кабинета пользователя
router.get('/personal', checkAuth, require('./personal').get);
router.get('/personal/:razdel', checkAuth, require('./personal').get);
router.post('/personal', checkAuth, require('./personal').post);
// Страница личного кабинета для мастерской
router.get('/workshop-private', checkAuth, require('./workshop-private').get);
router.get('/workshop-private/:razdel', checkAuth, require('./workshop-private').get);

// Страница регистрации
router.get('/register', require('./register').get);

// Обработка запроса на регистрацию пользователя
router.post('/register', require('./register').post);

// Тестовый УДАЛИТЬ
router.get('/categories', require('./categories').get);

// Промо страница для мастеров
router.get('/masters', require('./masters').get);

// Обработка запроса на регистрацию нового мастера
router.post('/register-workshop-by-user', require('./register-workshop-by-user').post);
router.post('/register-workshop-new-user', require('./register-workshop-new-user').post);

// ОБработка запроса на изменение данных пользователя
router.post('/update-user', checkAuth, require('./update-user').post);
router.post('/update-workshop-profile', checkAuth, require('./update-workshop').post);
router.post('/add-alias', checkAuth, require('./update-workshop-alias').post);

// Обработка запроса на создание нового товара
router.post('/add-product', checkAuth, require('./add-product').post);
router.post('/telegram', require('./telegram').post);
// Страница редактирования товара
router.get('/edit-product-:id', checkAuth, require('./editproduct').get);
router.post('/edit-product', checkAuth, require('./editproduct').post);

router.post('/removeProduct', checkAuth, require('./removeproduct').post);

router.post('/change-price-plan', checkAuth, require('./changepriceplan').post);
router.post('/activate-product', checkAuth, require('./activateproduct').post);
router.get('/import-:method', require('./import').get);
router.post('/import', require('./import').post);
router.post('/apply-service-product', checkAuth, require('./applyserviceproduct').post);

//Новый вывод категорий и продуктов
router.get('/catalog/:id', require('./newcategorypage').get);
router.get('/catalog/:subid/:id', require('./newcategorypage').get);
//Новый вывод продукта
router.get('/catalog/:subid/:subid1/:id', require('./newproductpage').get);

//Вывод основного раздела. Не конфликтует
router.get('/catalog', require('./catalogue').get);
router.get('/catalogue', require('./catalogue').get);
//Старый вывод категорий и продуктов
router.get('/category-:id', require('./ctg').get);
router.get('/product-:id', require('./productpage').get);
router.post('/productpage', require('./productpage').post);

//Новый вывод мастерской
router.get('/workshops/:id', require('./workshop-new').get);

//Старый вывод мастерской
router.get('/workshop-:id', require('./workshop').get);

router.post('/workshop', require('./workshop').post);

// Страница редактирования товара
router.get('/article-:id', require('./article').get);
router.get('/deposite', checkAuth, require('./deposite').get);
router.post('/deposite', require('./deposite').post);

router.post('/activate-promocode', checkAuth, require('./acitvatepromocode').post);

router.get('/rules', require('./rules').get);
router.get('/contacts', require('./contacts').get);

router.get('/password-reset', require('./passwordreset').get); // Страница с формой для ввода email для восстановления
router.post('/forgot', require('./forgotpassword').post); //Получает запрос на восстановление пароля по email и отправляет письмо с токеном
router.get('/reset:token', require('./resetpass').get); // Страница с формой для ввода нового пароля
router.post('/reset', require('./resetpass').post); // ОБрабочик запроса с новым паролем

router.post('/sendmail', require('./emailerer').post); //ОТправщик писем

router.get('/success-payment', checkAuth, function(req,res){ req.session.message = "Оплата прошла успешно. Благодарим Вас."; res.redirect('/workshop-private');});
router.get('/failed-payment', checkAuth, function(req,res){ req.session.message = "При проведении оплаты произошла ошибка."; res.redirect('/workshop-private');});

router.post('/testpost', function(req,res) { res.jsonp({'name':'test', type:"testerPOST"})});
router.get('/testpost', function(req,res) { res.jsonp({'name':'test', type:"testerGET"})});

router.post('/add-order-new-user', require('./neworderuser').post);
router.post('/add-order-existing-user', checkAuth, require('./neworder').post);
router.post('/update-user-avatar', checkAuth, require('./update-user-avatar').post);
router.post('/update-workshop-avatar', checkAuth, require('./update-workshop-avatar').post);
router.post('/search',require('./searcher').post);
router.post('/orderstat', checkAuth, require('./orderaction').post);
router.post('/addfavourite', checkAuth, require('./addfavourite').post);

//ajax Workshop
router.post('/editworkshop', checkAuth, require('./edit-workshop').post);
//cron
//router.get('/cron', checkAuth, require('./cron').get);
*/
//Admin panel
router.get('/manager', require('./manager').get);
//router.post('/manager', require('./manager').post);
//router.get('/manager/service/:type',  require('./managerservice').get);
//router.post('/manager/service',  require('./managerservice').post);
//router.get('/manager/articles',  require('./managerarticles').get);
//router.post('/manager/articles', require('./managerarticles').post);
//router.get('/manager/articles/create',  require('./managerarticlecreate').get);
//router.post('/manager/articles/create', require('./managerarticlecreate').post);
//router.get('/manager/articles-:id/edit', require('./managerarticledit').get);
//router.post('/manager/articles/edit',  require('./managerarticledit').post);
//router.get('/manager/catalog/:id', require('./managercatalog').get);
//router.get('/manager/orders', require('./managerorders').get);
//router.get('/manager/pages', require('./managerpages').get);
//router.post('/manager/pages', require('./managerpages').post);
//router.get('/manager/pages/:id',  require('./managereditpage').get);
//router.get('/manager/editor',  require('./managereditor').get);
// router.post('/manager/editor',  require('./managereditor').post);
// router.post('/manager/pages/:id',  require('./managereditpage').post);
//router.get('/info/:alias', require('./page').get);

//router.get('/manager/:id', checkAuth, require('./managerproducts').get);
//router.get('/manager/super', checkAuth, loadCatalog, require('./managerservice').get);
//router.post('/manager/super', checkAuth, require('./managerservice').post);
//router.get('/manager/best', checkAuth, loadCatalog, require('./managerservice').get);
//router.post('/manager/best', checkAuth, require('./managerservice').post);
//router.get('/manager/highlighted', checkAuth, loadCatalog, require('./managerservice').get);
//router.post('/manager/highlighted', checkAuth, require('./managerservice').post);



/*
//Корзина
router.get('/cart', require('./cart').get);
router.post('/cart', require('./cart').post);

router.post('/training', checkAuth, require('./training').post);
router.get('/vkauth', require('./vkauth').get);
router.get('/okauth', require('./okauth').get);
router.get('/fbauth', require('./fbauth').get);
router.get('/p/:id', require('./podborkas').get);
router.get('/sync', require('./sync').get);
//Сообщения
router.post('/messages', checkAuth, require('./messages').post);
router.get('/new', require('./new').get);
router.post('/new', require('./new').post);



//REST API
router.get('/api', function(req, res) {
	console.log(req.query);
	
	var method = req.query.method;
	switch(method) {
		case "getProducts":
			res.send('Products');
			break;
		case "getCategories":
			Category.getMainCategories(function(categories) {
				res.send(categories);
			})
			break;
	}
});

router.get('/:id', require('./workshop-new').get);

*/

module.exports = router;