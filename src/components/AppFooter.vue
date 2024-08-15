<template>
  <v-footer app class="bg-grey-lighten-1 pa-4 ma-0 text-start">
    <v-container>
      <v-row>
        <v-col>
          <h4>PROMOÇÃO</h4>
          <p>
            <a href="http://localhost:3000">VIP Club</a>
          </p>
          <p>
            <a href="http://localhost:3000">Promoções</a>
          </p>
          <p>
            <a href="http://localhost:3000">Indique e Ganhe</a>
          </p>
          <p>
            <a href="http://localhost:3000">Bônus</a>
          </p>
        </v-col>

        <v-col>
          <h4>AJUDA</h4>
          <p>
            <a href="http://localhost:3000">Sobre Nós</a>
          </p>
          <p>
            <a href="http://localhost:3000">Política de Privacidade</a>
          </p>
          <p>
            <a href="http://localhost:3000">Termos de Serviço</a>
          </p>
          <p>
            <a href="http://localhost:3000">Jogo Responsável</a>
          </p>
          <p>
            <a href="http://localhost:3000">AML</a>
          </p>
          <p>
            <a href="http://localhost:3000">FAQ</a>
          </p>
        </v-col>

        <v-col>
          <h4>CONTACTE-NOS</h4>
          <p>
            <a href="http://localhost:3000">marketing@piebets.com</a>
          </p>
          <p>
            <a href="http://localhost:3000">suporte@piebets.com</a>
          </p>
        </v-col>

        <v-col>
          <h4>JUNTE-SE À NOSSA COMUNIDADE</h4>
          <v-container class="pa-0">
            <v-row no-gutters>
              <v-col v-for="_ in 7" cols="auto" class="pr-4 pb-2">
                <a href="http://localhost:3000">
                  <v-icon>mdi-whatsapp</v-icon>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-divider class="mt-4 mb-6"></v-divider>

      <v-row>
        <h3>Fornecedores</h3>
        <v-container fluid>
          <v-row no-gutters justify="start">
            <v-col cols="auto" v-for="item in fornecedores" class="pa-1">
              <v-card width="150px">
                <a :href="item.link">
                  <v-img max-width="150px" :src="item.img"></v-img>
                </a>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>

      <v-divider  class="mt-4 mb-6"></v-divider>

      <v-container>
        <v-row>
          <v-col>
            <v-img src="@assets/piebetslogo.png" max-width="300px"></v-img>
            <p><span v-for="_ in 50">Texto legal</span></p>
            <p class="pt-6"><span v-for="_ in 20">Texto legal</span></p>
          </v-col>
          <v-col>
            <v-img src="@assets/piebetslogo.png" max-width="300px"></v-img>
            <p><span v-for="_ in 20">Texto legal</span></p>
            <p class="pt-6"><span v-for="_ in 60">Texto legal</span></p>
            <p class="pt-6">Todos os direitos reservados 2024 &copy</p>
          </v-col>
        </v-row>
      </v-container>

    </v-container>
  </v-footer>
</template>

<script setup lang="ts">

const fornecedores = [
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
  {
    link: 'localhost:3000/',
    img: './src/assets/piebetslogo.png'
  },
]
</script>

<style lang="css">
h4{
  margin-bottom: 20px
}

a:link {
  text-decoration: none;
  color: initial;
}

a:visited {
  text-decoration: none;
  color: initial;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}

</style>