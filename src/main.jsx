import { createRoot } from 'react-dom/client'
import { ThemeStorage } from './components/Theme/Theme.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
<ThemeStorage>
<App />
</ThemeStorage>)
