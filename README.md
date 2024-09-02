# Online-Store-Tea

## Сущности:
1. User:
    - id
    - phoneNumber
    - password (может быть пустым или равным null)
    - role

2. Basket:
    - id
    - userID

3. BasketProduct:
    - id
    - basketID
    - productID

4. Product:
    - id
    - name
    - price
    - img
    - categoryID
    - typeID
    - description
    - descriptionShort

5. Info:
    - id
    - productID
    - infoTitleID
    - description

6. InfoTitle:
    - id
    - name

7. Type:
    - id
    - name

8. Category:
    - id
    - name

9. TypeCategory: Промежуточная таблица для связи many-to-many
   - id

## Связи сущностей:
- **user / basket**: `one-to-one`
- **basket / basketProduct**: `one-to-many`
- **product / basketProduct**: `one-to-many`
- **product / info**: `one-to-many`
- **info / infoTitle**: `one-to-one`
- **type / product**: `one-to-many`
- **category / product**: `one-to-many`
- **type / category**: `many-to-many`

## Создание Роутеров и Контроллеров
- **User**: регистрация, логирование, проверка
    - `userRoutes.js`
    - `userController.js`
- **Basket**: создавать корзину, получать корзину
    - `basketRoutes.js`
    - `basketController.js`
- **Product**: создавать продукт, получать продукт, получать продукты
    - `productRoutes.js`
    - `productController.js`
- **Info**: создавать инфо, получать инфо
    - `infoRoutes.js`
    - `infoController.js`
- **InfoTitle**: создавать инфотайтл, получать инфотайтл
    - `infotitleRoutes.js`
    - `infotitleController.js`
- **Type**: создавать тип, получать тип, получать типы
    - `typeRoutes.js`
    - `typeController.js`
- **Category**: создание категории, получение категории, получения категорий
    - `categoryRoutes.js`
    - `categoryController.js`