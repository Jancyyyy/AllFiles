import { Component, State, h } from '@stencil/core';
 
@Component({
  tag: 'my-categories',
  styleUrl: 'Categories.css', // Add the appropriate style file if needed
  shadow: true,
})
export class MyCategories {
 @State() naviagate:boolean=false;
  navigateToHomePage() {
    // Implement navigation logic as needed
    this.naviagate=true;
  }
 
  renderCategoryItem(name: string, imageUrl: string) {
    return (
      <div
        style={{ margin: '10px', textAlign: 'center' }}
        onClick={() => this.navigateToHomePage()}
      >
        <img
          src={imageUrl}
          alt={`${name} category`}
          style={{ width: '100px', height: '100px', marginBottom: '18px' }}
        />
        <p>{name}</p>
      </div>
    );
  }
 
  render() {
    return (
      <my-layout>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h2>What are you shopping for today?</h2>
        </div>
 
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontWeight: 'bold',
          }}
        >
{this.renderCategoryItem("Women" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc2hO4zhIp-VBO1nMwSE5nxa7Mv6omymVJQ&usqp=CAU' )}
{this.renderCategoryItem("Men" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_JaMFesv0nyt_g9AvpbSJsi44JViTfOcaA&usqp=CAU' )}
{this.renderCategoryItem("Kids" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIaHIYl3ndbFQCyO2q0ZIXdYMcGTeUazYzQ&usqp=CAU' )}
{this.renderCategoryItem("Footwear" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET2aVWLZITEtzRxSWn4d2mlckAiD1BdmfCQ&usqp=CAU')}
{this.renderCategoryItem("jewelry" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitSHU4ekkuCLhnljfgzrVWf6aOQAK3B7icQ&usqp=CAU')}
{this.renderCategoryItem("Beauty" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooKtW-v4U8ArQ6I_j7WiIqHGl-KayjtEiIQ&usqp=CAU')}
{this.renderCategoryItem('Decor' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dtArC8D0og5UuVtzi9mr2z5Dqt_AOOen4o8JpYwzRhcMVBZxrCol_1T99yzdkeRVovU&usqp=CAU')}
{this.renderCategoryItem("Home" ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQSej5rghUN2qz9TURo95Cz5LxqCKboP3qQ&usqp=CAU')}
      </div>
      {/* <Router>
        <Route
            path="/"
            Component="my-homepage"
            componentprops={{fromCategories: this.naviagate}}
            />
        </Router>  */}
      </my-layout>
    );
  }
}