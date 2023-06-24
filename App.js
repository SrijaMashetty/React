/******
 * 
 * <div id = parent>
 *      <div id = child1>
 *          <h1>iam a h1 tag</h1>
 *          <h2>iam a h2 tag</h2>
 *      </div>
 *      <div id = child2>
 *          <h1>iam a h1 tag</h1>
 *          <h2>iam a h2 tag</h2>
 *      </div>
 * </div>
 * ReactElement(object) = HTML(Browser Understands)
 */

const parent = React.createElement(
    "div" ,
    {id:"parent"} ,[
        React.createElement("div" ,{id:"child1"},[ 
            React.createElement("h1" ,{} ,"iam from h1 tag" ),
            React.createElement("h2" ,{} ,"iam from h2 tag" )
       ]),
       React.createElement("div" ,{id:"child2"},[ 
        React.createElement("h1" ,{} ,"iam from h1 tag" ),
        React.createElement("h2" ,{} ,"iam from h2 tag" )
   ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

