package com.example.cardapio.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepository;
import com.example.cardapio.food.FoodRequestDTO;
import com.example.cardapio.food.FoodResponseDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController // fala pro spring que é um controller
@RequestMapping("/food") // indica o endpoint do controller
public class FoodController {

    @Autowired
    private FoodRepository repository; // instanciando a interface repository

    @CrossOrigin(origins = "*", allowedHeaders = "*") // controle de acesso (CORS), aqui eu to liberando pra todos
                                                      // mesmo, mas em produção nao pode
    @PostMapping() // Método post
    public ResponseEntity<String> saveFood(@RequestBody FoodRequestDTO data) { // ReqBody porque vai buscar o Req que o user mandou
        Food foodData = new Food(data); // inves de transformar Classe em DTO, aqui vai ser DTO pra Classe, pois o
                                        // repository espera a classe Food
        repository.save(foodData);

        return ResponseEntity.status(201).body(("Comida cadastrada com sucesso"));

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping // signfica que quando der o get vai executar o método getAll()
    public ResponseEntity<List<FoodResponseDTO>> getAll() {

        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return ResponseEntity.ok(foodList); // retorno da lista

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFood(@PathVariable Long id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.ok("Comida apagada com sucesso");

        }

        else{
            return ResponseEntity.status(404).body("Erro:  Comida não encontrada");
        }

    }

}
