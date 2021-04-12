<template>
  <div>
    <div v-if="selectedRestaurant === ''">
      <div class="search-header_background"></div>
      <div class="search-header">
        <div class="search-header_content">
          <a class="link" style="color: #FF5722!important;" href="/home"><h1>ResaVue</h1></a>

          <v-form
              ref="form"
              @submit.prevent="getSearchRestaurants"
          >
            <div class="d-flex justify-center">
              <v-text-field
                  v-model="form.name"
                  style="max-width: 300px;height: 65px;"
                  class="mr-5 search-header_input"
                  label="Rechercher par nom"
              ></v-text-field>
              <v-text-field
                  v-model="form.location"
                  :rules="rules.location"
                  style="max-width: 150px;height: 65px;"
                  class="mr-5 search-header_input"
                  label="Ville"
                  required
              ></v-text-field>
              <v-btn
                  :disabled="!formIsValid"
                  text
                  class="search-header_button"
                  style="height: 65px;"
                  type="submit"
              >
                Chercher
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>

      <div v-if="!search">
        <div>
          <h3 style="margin-top: 40px; margin-left: 80px; margin-bottom: -40px;">Lieux ouverts à Lyon</h3>
          <div class='loader-container' v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <v-slide-group
              v-if="!loading"
              class="pa-4"
              active-class="success"
              show-arrows
          >
            <v-slide-item
                v-for="restaurant in lyonRestaurants"
                :key="restaurant.id"
            >
              <v-card
                  class="my-12 ml-3 mr-3"
                  max-width="375"
              >
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    height="250"
                    :src="restaurant.image_url"
                ></v-img>

                <v-card-title>{{ restaurant.name }}</v-card-title>

                <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"
                  >
                    <v-rating
                        :value="restaurant.rating"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">
                      {{ restaurant.rating }} ({{ restaurant.review_count }})
                    </div>
                  </v-row>

                  <div class="my-4 subtitle-1">
                    <span v-if="restaurant.price">{{ restaurant.price }} •</span> <span v-for="(category, index) in restaurant.categories" :key="category.alias">{{ category.title }}<span v-if="index !== restaurant.categories.length - 1">, </span></span>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                      style="color: #FF5722;"
                      color="lighten-2"
                      text
                      @click="seeMore(restaurant)"
                  >
                    Voir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>

        <div>
          <h3 style="margin-top: 40px; margin-left: 80px; margin-bottom: -40px;">Lieux ouverts à Paris</h3>
          <div class='loader-container' v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <v-slide-group
              class="pa-4"
              active-class="success"
              show-arrows
              v-if="!loading"
          >
            <v-slide-item
                v-for="restaurant in parisRestaurants"
                :key="restaurant.id"
            >
              <v-card
                  class="my-12 ml-3 mr-3"
                  max-width="375"
              >
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    height="250"
                    :src="restaurant.image_url"
                ></v-img>

                <v-card-title>{{ restaurant.name }}</v-card-title>

                <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"
                  >
                    <v-rating
                        :value="restaurant.rating"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">
                      {{ restaurant.rating }} ({{ restaurant.review_count }})
                    </div>
                  </v-row>

                  <div class="my-4 subtitle-1">
                    <span v-if="restaurant.price">{{ restaurant.price }} •</span> <span v-for="(category, index) in restaurant.categories" :key="category.alias">{{ category.title }}<span v-if="index !== restaurant.categories.length - 1">, </span> </span>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                      style="color: #FF5722;"
                      color="lighten-2"
                      text
                      @click="seeMore(restaurant)"
                  >
                    Voir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>

        <div>
          <h3 style="margin-top: 40px; margin-left: 80px; margin-bottom: -40px;">Lieux ouverts à Marseille</h3>
          <div class='loader-container' v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <v-slide-group
              v-if="!loading"
              class="pa-4"
              active-class="success"
              show-arrows
          >
            <v-slide-item
                v-for="restaurant in marseilleRestaurants"
                :key="restaurant.id"
            >
              <v-card
                  class="my-12 ml-3 mr-3"
                  max-width="375"
              >
                <template slot="progress">
                  <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                    height="250"
                    :src="restaurant.image_url"
                ></v-img>

                <v-card-title>{{ restaurant.name }}</v-card-title>

                <v-card-text>
                  <v-row
                      align="center"
                      class="mx-0"
                  >
                    <v-rating
                        :value="restaurant.rating"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">
                      {{ restaurant.rating }} ({{ restaurant.review_count }})
                    </div>
                  </v-row>

                  <div class="my-4 subtitle-1">
                    <span v-if="restaurant.price">{{ restaurant.price }} •</span> <span v-for="(category, index) in restaurant.categories" :key="category.alias">{{ category.title }}<span v-if="index !== restaurant.categories.length - 1">, </span> </span>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                      style="color: #FF5722;"
                      color="lighten-2"
                      text
                      @click="seeMore(restaurant)"
                  >
                    Voir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>
      </div>

      <div v-if="search" class="">
        <div class='loader-container' v-if="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div v-if="searchRestaurants.length === 0 && searchRestaurants !== ''">
          <h3 style="margin-top: 40px; margin-left: 80px; margin-bottom: -40px;">Aucun résultats</h3>
        </div>

        <div v-if="searchRestaurants !== ''" class="d-flex flex-wrap justify-space-between mr-10 ml-10">
          <v-card
              v-for="restaurant in searchRestaurants"
              :key="restaurant.id"
              class="my-12 ml-3 mr-3"
              max-width="375"
          >
            <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>

            <v-img
                height="250"
                :src="restaurant.image_url"
            ></v-img>

            <v-card-title>{{ restaurant.name }}</v-card-title>

            <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >
                <v-rating
                    :value="restaurant.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  {{ restaurant.rating }} ({{ restaurant.review_count }})
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                <span v-if="restaurant.price">{{ restaurant.price }} •</span> <span v-for="(category, index) in restaurant.categories" :key="category.alias">{{ category.title }}<span v-if="index !== restaurant.categories.length - 1">, </span> </span>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                  style="color: #FF5722;"
                  color="lighten-2"
                  text
                  @click="seeMore(restaurant)"
              >
                Voir
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>

    <div v-if="selectedRestaurant !== ''">
      <Navigation></Navigation>

      <div class="header_images d-flex" style="height: 600px;">
        <img v-for="image in selectedRestaurant.photos" :key="image" :src="image" style="width: 33.33%">
      </div>

      <div class="" style="margin-top: -150px;">
        <v-card
            class="my-12 ml-5 mr-5"
            style="font-size: 16px;"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-card-title style="font-size: 32px;">{{ selectedRestaurant.name }}</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="selectedRestaurant.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                {{ selectedRestaurant.rating }} ({{ selectedRestaurant.review_count }})
              </div>
            </v-row>

            <div class="my-4 subtitle-1">
              <span v-if="selectedRestaurant.price">{{ selectedRestaurant.price }} •</span> <span v-for="(category, index) in selectedRestaurant.categories" :key="category.alias">{{ category.title }}<span v-if="index !== selectedRestaurant.categories.length - 1">, </span> </span>
              -
              <span v-for="address in selectedRestaurant.location.display_address" :key="address" style="font-weight: bold;"> {{ address }}</span>
            </div>

            <v-divider class="mx-4"></v-divider>

            <h4>Jours d'ouvertures</h4>
            <div v-for="open in selectedRestaurant.hours[0].open" :key="open.day">
              <div v-if="open.day === 0"><strong>Lundi :</strong> {{ open.start }} - {{ open.end }}</div>
              <div v-if="open.day === 1"><strong>Mardi :</strong> {{ open.start }} - {{ open.end }}</div>
              <div v-if="open.day === 2"><strong>Mercredi :</strong> {{ open.start }} - {{ open.end }}</div>
              <div v-if="open.day === 3"><strong>Jeudi :</strong> {{ open.start }} - {{ open.end }}</div>
              <div v-if="open.day === 4"><strong>Vendredi :</strong> {{ open.start }} - {{ open.end }}</div>
              <div v-if="open.day === 5"><strong>Samedi :</strong> {{ open.start }} - {{ open.end }}</div>
              <div v-if="open.day === 6"><strong>Dimanche :</strong> {{ open.start }} - {{ open.end }}</div>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                style="color: #FF5722;"
                color="lighten-2"
                text
                @click="addReservation()"
            >
              Reserver
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <v-dialog
          v-model="dialog"
          persistent
          max-width="700px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Faire une réservation</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                >
                  <v-text-field
                      v-model="reserveName"
                      label="Nom*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                >
                  <v-text-field
                      v-model="reserveEmail"
                      label="Email*"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    cols="6"
                >
                  <v-date-picker
                      v-model="reserveDate"
                      show-adjacent-months
                      header-color="#FF5722"
                  ></v-date-picker>
                </v-col>
                <v-col
                    cols="6"
                >
                  <v-time-picker
                      v-model="reserveTime"
                      header-color="#FF5722"
                      format="24hr"
                  ></v-time-picker>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-select
                      v-model="reserveNbPersons"
                      :items="nbPersons"
                      label="Nombre de personnes*"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                      v-model="reserveMsg"
                      solo
                      name="input-7-4"
                      label="Message particulier (falcultatif)"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>* Indique les champs obligatoires</small>
            <v-alert
                v-if="reserveErrorMsg !== ''"
                dense
                outlined
                type="error"
            >
              {{ reserveErrorMsg }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Fermer
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="validateReservation()"
            >
              Ajouter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
  // Je n'ai malheureusement pas eu le temps de faire l'étape 4 et d'optimiser et
  // clean mon code notament en découpant les éléments de ma page en différentes vues
  // j'ai du aller au plus rapide :(

  import RestaurantService from '../services/restaurant.service'
  import Navigation from "@/components/Navigation";

  export default {
    name: "Restaurants",
    firebase() {
      return {
        reservations: this.$db.ref("/reservations/")
      };
    },
    async created() {
      await this.getBaseRestaurants()
    },
    data() {
      const defaultForm = Object.freeze({
        name: '',
      })

      return {
        lyonRestaurants: [],
        parisRestaurants: [],
        marseilleRestaurants: [],
        searchRestaurants: [],
        selectedRestaurant: '',
        search: false,
        loading: false,
        dialog: false,
        nbPersons: [1, 2, 3, 4, 5, 6],
        reserveDate: null,
        reserveName: '',
        reserveEmail: '',
        reserveHour: null,
        reserveMsg: '',
        reserveTime: '',
        reserveNbPersons: null,
        reserveErrorMsg: '',
        reservations: [],
        form: Object.assign({}, defaultForm),
        rules: {
          location: [val => (val || '').length > 0 || 'Ce champ est requis'],
        },
        defaultForm,
      }
    },
    components: {
      Navigation
    },
    computed: {
      formIsValid () {
        return (
            this.form.location
        )
      },
    },
    methods: {
      async getBaseRestaurants() {
        try {
          this.loading = true

          let baseLyonRestaurants = await RestaurantService.getBaseRestaurants('Lyon')
          this.lyonRestaurants = baseLyonRestaurants.businesses

          let baseParisRestaurants = await RestaurantService.getBaseRestaurants('Paris')
          this.parisRestaurants = baseParisRestaurants.businesses

          let baseMarseilleRestaurants = await RestaurantService.getBaseRestaurants('Marseille')
          this.marseilleRestaurants = baseMarseilleRestaurants.businesses

          this.loading = false
        } catch (e) {
          console.error(e)
        }
      },
      async seeMore(restaurant) {
        this.search = false
        this.selectedRestaurant = await RestaurantService.getRestaurantDetail(restaurant)

        this.selectedRestaurant.hours[0].open.forEach(open => {
          open.start = open.start.slice(0, 2) + "h" + open.start.slice(2);
          open.end = open.end.slice(0, 2) + "h" + open.end.slice(2);
        })
      },
      async getSearchRestaurants() {
        try {
          this.searchRestaurants = ''
          this.search = true
          this.loading = true

          let searchRestaurantsResult = await RestaurantService.getSearchRestaurants(this.form.location, this.form.name)
          this.searchRestaurants = searchRestaurantsResult.businesses

          this.loading = false
        } catch (e) {
          console.error(e)
        }
      },
      addReservation() {
        this.dialog = true
      },
      validateReservation() {
        if (this.reserveName === '' || this.reserveEmail === '' || this.reserveDate === null
            || this.reserveTime === null || this.reserveNbPersons === null) {
          this.reserveErrorMsg = 'Certains champs obligatoires ne sont pas renseignés'
        } else {
          this.reserveErrorMsg = ''

          const data = {
            'restaurantId': this.selectedRestaurant.id,
            'name': this.reserveName,
            'email': this.reserveEmail,
            'day': this.reserveDate,
            'hour': this.reserveTime,
            'nbPersons': this.reserveNbPersons,
            'message': this.reserveMsg,
            'isCheckout': false,
          }

          console.log(this.$firebaseRefs)

          this.$firebaseRefs.reservations.push(data);

          this.dialog = false
        }
      }
    }
  }
</script>

<style lang="scss">
  .loader-container {
    width: 50%;
    height: 50%;
    margin-left: 42%;
    margin-top: 100px;
    margin-bottom: 100px;
    filter: url(#gooey);
  }

  .loader-container > * {
    display: inline-block;
    left: 0;
    width: 4rem;
    height: 4rem;
    background: #FF5722;
    top: 25%;
    border-radius: 50%;
    animation: loading 4s infinite;
    transform: scale(.1);
    opacity: 0;

  &:nth-child(1) {
     animation-delay: .5s;
   }
  &:nth-child(2) {
     animation-delay: 1s;
   }
  &:nth-child(3) {
     animation-delay: 1.5s;
   }
  &:nth-child(4) {
     animation-delay: 2s;
   }
  }

  @keyframes loading {
    50% {
      transform: scale(1.25);
      left: 50%;
      opacity: 1;
    }
    100% {
      transform: scale(.1);
      left: 100%;
      opacity: 0;
    }
  }
</style>