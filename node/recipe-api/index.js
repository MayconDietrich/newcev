//split
const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');
let recipes = require('./recipes.json');

const getRecipe = (request, response) => {
  const {name, ingredients, remove, edit} = URL.parse(request.url, true).query;
  let message = '';
  const recipe = {
    name, ingredients
  };
  if(name) {
    const recipeFound = recipes.filter(recipe => String(recipe.name) === String(name));
    if(edit) {
      if(recipeFound.length) {
        recipeFound[0].ingredients = ingredients;
        console.log(recipeFound[0].ingredients);
        recipes = recipes.filter(recipe => String(recipe.name) !== String(name));
        message = 'Receita editada';
        response.end(JSON.stringify({
          status: message,
          data: recipe
        }));
      }else {
        response.end('não foi encontrada a receita');
        return;
      }
    }
    if(remove) {
      message = 'Receita excluída';
      console.log('excluiu');
      recipes = recipes.filter(recipe => String(recipe.name) !== String(name));

      if(!recipeFound.length) {
        response.end('receita não encontrada');
      }
    }else {
      if(recipeFound.length && !edit) {
        response.end('já tem essa receita cringe') 
        return;
      }
      message = 'Receita salva';
      recipes.push(recipe);
    }
    fs.writeFile(
      path.join(__dirname, 'recipes.json'),
      JSON.stringify(recipes, null, 2),
      (error) => {
        if(error) return;
        console.log('Successfully saved register');
        response.end(JSON.stringify({
          status: message,
          data: recipe
        }));
      }
    );
  }else {
    response.end(JSON.stringify(recipes));
  }
}

const server = http.createServer(getRecipe);

server.listen(3030, () => {
  console.log('API is listening on port 3030');
})