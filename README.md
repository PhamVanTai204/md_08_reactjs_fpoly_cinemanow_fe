1 Quy tắc đặt tên
1.1 Tên file: lowercase, dùng dấu _ (snake_case)

✅ home_screen.dart ⛔ HomeScreen.dart 1.2 Tên class: PascalCase
✅ class HomeScreen ⛔ class home_screen 1.3 Tên biến & hàm: camelCase
✅ int userAge = 30; ⛔ int User_Age = 30;


2 Quy tắc viết Widget
🏗 StatelessWidget trước nếu không có state
✅ class HomeScreen extends StatelessWidget
🔄 Dùng StatefulWidget khi có logic thay đổi UI
♻ Chia nhỏ widget khi có từ 100 dòng code trở lên
🔄 Dùng const khi có thể để tối ưu hiệu suất

3 Quản lý trạng thái
 Dùng Redux Toolkit để quản lý trạng thái cục bộ
 





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
