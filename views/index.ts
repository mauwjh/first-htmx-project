const createHomePageTemplate = () => `
    <html lang="en">
            <head>
                <title>My Grocery List</title>
            </head>
            <script src="https://unpkg.com/htmx.org@2.0.0" integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="/styles.css">
        <body>
            <header>
                <h1>My Grocery List</h1>
            </header>
            <main>
                <div class="grocery-list">
                    <button hx-get="/groceries" hx-swap="outerHTML">Show Groceries</button>
                </div>
                <div class="add-grocery-item-form">
                    <h2>What do you want to buy?</h2>
                    <form>
                        <input type="text" name="title" placeholder="title" />
                        <input type="number" name="quantity" placeholder="1" />
                        <button hx-post="/groceries" hx-target=".grocery-list ul" hx-swap="beforeend">Add Grocery Item</button>
                    </form>
                </div>
            </main>
        </body>
    </html>
`;

export default createHomePageTemplate;
