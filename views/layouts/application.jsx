const React = require('react');

const ApplicationLayout = ({title}) => {
    return (
        <html>
            <head>
                <title>InsightJS{ title ? ` | ${title}` : ''}</title>
            </head>
            <body>
                <header>
                    <h1>Insight</h1>
                    <nav>
                        <a href="/">Home</a>
                    </nav>
                </header>
                <aside>
                    <ul>
                        <li><a href="/items">List items</a></li>
                        <li><a href="/items/new">Add an item</a></li>
                        <li><a href="/transfers/new">Create a new outgoing transfer</a></li>
                        <li><a href="/destructions/new">Create a new destruction</a></li>
                    </ul>
                </aside>
                <div id='container'>
                </div>
            </body>
        </html>
    )
}

module.exports = ApplicationLayout