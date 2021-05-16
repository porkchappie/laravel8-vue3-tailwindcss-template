init template.

```
cd {project_dir}
cp .env.example .env || copy .env.example .env
composer install
php artisan key:generate
npm install
npm run dev
php artisan serve
```
