package com.example.cardapio.food;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name="foods") //falando pro spring o nome da tabela
@Entity(name="foods") // nome da entidade
@Getter //Getter funciona trazendo o body da requisição, indo na tabela e puxando os dados, sem ele, vem vazio o JSON
@NoArgsConstructor //Declara um construtor sem nenhum argumento em runtime
@AllArgsConstructor //Declara um construtor com todos os argumentos em runtime
@EqualsAndHashCode(of = "id")

public class Food {

@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;

private Integer price;


public Food(FoodRequestDTO data){
    this.name = data.name();
    this.price = data.price();
}


}
