package com.example.cardapio.food;


// o record serve para representar os dados, passando para os parametros os atributos da Classe

public record FoodResponseDTO(long id, String name, Integer price) {

  public FoodResponseDTO(Food food){
    this(food.getId(), food.getName(), food.getPrice());
  }
}
