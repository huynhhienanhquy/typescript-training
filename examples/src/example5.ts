// interface + extending types + union + narrowing

interface dog_ex5 {
  type: "dog";
  bark(): void;
}

interface cat_ex5 {
  type: "cat";
  meow(): void;
 }

type pet = cat_ex5 | dog_ex5;

function makeSound(pet: pet) {
  if (pet.type == "dog") {
    pet.bark();
  }  else {
    pet.meow();
  }
}

