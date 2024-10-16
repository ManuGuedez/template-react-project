# How to create a Vite project
Once inside the repository, run the `npm create vite@latest` command from the console, then follow the instructions.
> [!NOTE]
> Select React as framework and JavaScript as variant (using the keyboard arrow and pressing Enter). Then follow the instructions again.

**To install Bulma's dependencies...**

Run the command `npm install bulma` in the console.
It is also necessary to add the following import in the main.jsx file `import 'bulma/css/bulma.css'`.

**To install the routing dependencies...**

Run the command "npm install react-router-dom".
Add to the main.jsx file the following import: `import { BrowserRouter as Router } from "react-router-dom";`

And rewrite the code as shown:
```
createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>    
      <App />      
    </StrictMode>    
  </Router>  
);
```

In the App.jsx file, add the following import: `import { Routes, Route, Navigate } from "react-router-dom";`

Then in any other files you want to use the routing tools on, simply import links like: `useNavigate` and `useParams`


To have a default route once a user opens the app, use the following line: 
`<Route path="/*" element={<Navigate replace to="/welcome" />} />`
