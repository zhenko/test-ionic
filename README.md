# Todo App

This is a simple Todo application built using Ionic Framework and Vue 3. It allows users to create tasks.

## Features

- Create tasks.
- Mark tasks as completed.
- Multilingual support using Vue i18n.
- PWA (Progressive Web Application) support.

## Technologies Used

- Ionic Framework
- Vue 3
- Vue Router
- Vuex
- Vue i18n

## Installation

1. Clone the repository:

git clone (https://github.com/zhenko/test-ionic)https://github.com/zhenko/test-ionic

2. Navigate to the project directory:

cd todo-app

3. Install dependencies:

npm install

## Usage

1. Run the development server:

ionci serve

2. Open the application in your web browser:

http://localhost:8080

## Configuration for PWA

To configure your Todo app as a Progressive Web Application (PWA), follow these steps:

1. Add a `manifest.json` file in the `public` directory with the necessary configurations, such as the name, icons, and theme colors.

2. Include the manifest in the HTML file (`public/index.html`) by adding the following line inside the `<head>` tag:

```html
<link rel="manifest" href="/manifest.json">

Register a service worker to enable offline capabilities and caching. You can use Workbox or another service worker library for this purpose.

Ensure that your app is responsive and works well on various devices and screen sizes.

Test your PWA using Lighthouse or other testing tools to ensure it meets PWA requirements and best practices.


````
Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details
