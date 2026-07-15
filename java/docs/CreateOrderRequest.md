

# CreateOrderRequest

## anyOf schemas
* [CreateOrderRequestAnyOf](CreateOrderRequestAnyOf.md)
* [CreateOrderRequestAnyOf1](CreateOrderRequestAnyOf1.md)

## Example
```java
// Import classes:
import ai.joinaffinity.sdk.model.CreateOrderRequest;
import ai.joinaffinity.sdk.model.CreateOrderRequestAnyOf;
import ai.joinaffinity.sdk.model.CreateOrderRequestAnyOf1;

public class Example {
    public static void main(String[] args) {
        CreateOrderRequest exampleCreateOrderRequest = new CreateOrderRequest();

        // create a new CreateOrderRequestAnyOf
        CreateOrderRequestAnyOf exampleCreateOrderRequestAnyOf = new CreateOrderRequestAnyOf();
        // set CreateOrderRequest to CreateOrderRequestAnyOf
        exampleCreateOrderRequest.setActualInstance(exampleCreateOrderRequestAnyOf);
        // to get back the CreateOrderRequestAnyOf set earlier
        CreateOrderRequestAnyOf testCreateOrderRequestAnyOf = (CreateOrderRequestAnyOf) exampleCreateOrderRequest.getActualInstance();

        // create a new CreateOrderRequestAnyOf1
        CreateOrderRequestAnyOf1 exampleCreateOrderRequestAnyOf1 = new CreateOrderRequestAnyOf1();
        // set CreateOrderRequest to CreateOrderRequestAnyOf1
        exampleCreateOrderRequest.setActualInstance(exampleCreateOrderRequestAnyOf1);
        // to get back the CreateOrderRequestAnyOf1 set earlier
        CreateOrderRequestAnyOf1 testCreateOrderRequestAnyOf1 = (CreateOrderRequestAnyOf1) exampleCreateOrderRequest.getActualInstance();
    }
}
```


