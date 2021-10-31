/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
let $checked;


// let typeArr = [];
// let i=0;
// for(let el of pokemons){
//   typeArr[i]=(el.types.join(",")).replace(",","-");
//   i++;
// }

// typeArr.sort();
// i=0;
// let newTypeArr = [];
// newTypeArr[i] = typeArr[i];
// for(let j = i+1; j<typeArr.length; j++){
//   if(typeArr[j]==typeArr[j-1]){
//     continue
//   }
//   else{
//     newTypeArr[i+1]=typeArr[j];
//     i+=1;
//   }
// }

// console.log(newTypeArr); //wydobyliśmy sobie typy to potrzebne do cssa ógółem

function renderPokemons(pokemons) {
  pokemonsContainer.innerHTML = '';
  for(let el of pokemons){
    let newPokemon = document.createElement('div');
    let types = (el.types.join(',')).replace(',', '-');
    newPokemon.classList.add('pokemon-card');
    newPokemon.innerHTML = `<div class="img-container">
                              <img src="${el.image}"/>
                            </div>
                            <div class="description">
                              <p class="id">ID: ${el.id}</p>
                              <p class="name">Nazwa: ${el.name}</p>
                              <p class="types">Typ: ${types}</p>
                            </div>`;
    newPokemon.classList.add(types);
    if($checked){
      for(let type of $checked){
        if(newPokemon.classList.toString().indexOf(type)!=-1){
          newPokemon.classList.add('hidden');
        }
      }
    }
    if(document.querySelector('#pokemon-name').value){
      if(el.name.indexOf(document.querySelector('#pokemon-name').value)==-1){
        newPokemon.classList.add('hidden');
      }
    }
    pokemonsContainer.append(newPokemon);
  }
  console.log(pokemonsContainer.childElementCount);
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);
console.log(pokemonsContainer.childElementCount);
/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

const checkBoxes = (boxes) => {
  let uncheckedArr = [];
  let i=0;
  boxes.forEach((el)=>{
      if(!el.checked){
          uncheckedArr[i] = el.id;
          i+=1;
      }
  });
  uncheckedArr.pop();
  if(uncheckedArr.length!==0){
    return uncheckedArr;
  }
}

function filterPokemons(){
  renderPokemons(pokemons);
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  $checked = checkBoxes(document.querySelectorAll('#form-filters input'));
  renderPokemons(pokemons);
}

form.addEventListener("submit", submitForm);
document.querySelector('#pokemon-name').addEventListener('input', filterPokemons);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
