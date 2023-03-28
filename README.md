# DrivenEats
iFood-like project for Driven Education web-developer bootcamp. Design by Driven. 

## Tecnologies used on this project:
Html, css and Vanilla Js.

## ✅ Requisitos

### Versionamento do código
    - [ ]  Versionamento usando Git.
    - [ ]  Faça *commits* a cada funcionalidade implementada.

 ### Layout
    - [ ]  Aplicar layout para *mobile*, seguindo o Figma fornecido.
    - [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem.
    - [ ]  É necessário variar o preço em cada item da mesma categoria.
    - [ ]  Utilizar as fontes: [Righteous](https://fonts.google.com/specimen/Righteous) para nome do restaurante e títulos das categorias, e [Roboto](https://fonts.google.com/specimen/Roboto) para os demais textos.
    - [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do *layout*.
    - [ ]  Para fazer os produtos rolarem horizontalmente, utilize `overflow-x: scroll`.
### Seleção de itens
    - [ ]  Ao clicar sobre um item, ele deve ser marcado como selecionado.
    - [ ]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.
    - [ ]  Ao clicar em um item já marcado, não é necessário desmarcá-lo.
### Botão de finalizar pedido
    - [ ]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer. (Além de alterar o estilo, use o atributo **disabled** no HTML da tag button.)
    - [ ]  Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.
### Envio do pedido
    - [ ]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida.
    - [ ]  Essa mensagem deverá seguir este formato, o padrão abaixo:

## ✅ Bônus (opcional)

    - Peça o nome e endereço
    - Ao clicar em "Fechar pedido", lance dois `prompt` para o usuário solicitando seu **nome** e **endereço**. Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp nesse **formato** (igualzinho, sem nenhum caractere a mais):
        
        ```
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27,70
        
        Nome: Fulano
        Endereço: Rua...
        ```
        
- Confirme os dados antes de finalizar o pedido
    - Ao clicar em "Fechar pedido", em vez de ir para o WhatsApp direto, primeiro revise a compra seguindo a tela bônus disponível no Figma.