<readme>
  <h1>🌀 Time Off App</h1>
  <p>A simple <strong>Ionic React</strong> application for managing and viewing time-off requests.</p>

  <h2>🚀 Tech Stack</h2>
  <ul>
    <li><a href="https://ionicframework.com/docs/react">Ionic Framework (React)</a></li>
    <li><a href="https://react-hook-form.com/">React Hook Form</a></li>
    <li><a href="https://reactrouter.com/">React Router DOM</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://date-fns.org/">date-fns</a></li>
  </ul>

  <h2>📦 Installation</h2>
  <pre>
    git clone https://github.com/robert-dominguez-dev/time-off.git
    cd time-off
    npm install
  </pre>

  <h2>▶️ Run the App</h2>
  <pre>
    ionic serve
  </pre>
  <p>Then open the app in your browser at <strong>http://localhost:8100</strong>.</p>

  <h2>🧱 Build for Production</h2>
  <pre>
    ionic build
  </pre>
  <p>The compiled files will be located in the <code>build/</code> directory.</p>

  <h2>📱 Running on Device / Simulator</h2>
  <pre>
    ionic cap add ios
    ionic cap add android
    ionic cap sync
    ionic cap open ios
    # or
    ionic cap open android
  </pre>

  <h2>🧩 Folder Structure</h2>
  <pre>
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── pages/          # App pages (views)
├── routes/         # Routing setup
├── constants/      # Shared constants and config
└── types/          # TypeScript types
  </pre>

  <h2>💡 Notes</h2>
  <ul>
    <li>Uses <strong>React Hook Form</strong> for form state management.</li>
    <li>Fully typed with <strong>TypeScript</strong>.</li>
    <li>Styled using Ionic built-in components and custom helpers.</li>
    <li>Default form validation and layout included.</li>
  </ul>

  <h2>👨‍💻 Author</h2>
  <p><strong>Robert Dominguez</strong><br/>
  <a href="https://www.robertdominguez.cz">www.robertdominguez.cz</a></p>
</readme>
