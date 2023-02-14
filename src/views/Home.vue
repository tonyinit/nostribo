<template>
  <!-- main container -->
  <v-container class="px-0">

    <!-- header element -->
    <v-card color="transparent">

      <!-- logo, nostribo, messages? -->
      <v-row>
        <v-col class="mx-3 mt-3">
          <v-row>
            <v-col class="d-flex align-center">
              <v-img src="../assets/nostribo.svg" max-width="30px"></v-img>
              <span class="text-h5 pl-1">Nostribo</span>
            </v-col>
            <v-col class="d-flex justify-end align-center">
              <v-btn class="rounded-lg bordered" color="card" icon="mdi-message-outline"></v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- following, suggested, trending buttons -->
      <v-row>
        <v-col class="d-flex justify-space-between mx-3">
          <v-btn class="text-none font-weight-light font-spacing-sm rounded-lg mr-3" size="large"
            color="primary">Following</v-btn>
          <v-btn class="text-none font-weight-light font-spacing-sm rounded-lg bordered mr-3" size="large"
            color="card">Suggested</v-btn>
          <v-btn class="text-none font-weight-light font-spacing-sm rounded-lg bordered" size="large"
            color="card">Trending</v-btn>
        </v-col>
      </v-row>

      <v-row><v-col></v-col></v-row>
    </v-card>

    <!-- notes and other stuff -->
    <v-card class="post_card mb-6" variant="rounded-xl" prepend-icon="mdi-twitter" title="tony" v-for="event in events">
      <!-- if note includes image -->
      <!-- <v-img class="mx-auto" height="300" lazy-src="https://picsum.photos/200" max-width="500"></v-img> -->

      <!-- note content, if not does not contain image -->
      <v-row>
        <v-col class="mx-3">
          <span class="text-h6 font-weight-light">&nbsp;{{
            event.content
          }}</span>
        </v-col>
      </v-row>

      <!-- like/comment/share/bookmark buttons -->
      <v-row class="pb-1">
        <v-col>
          <v-icon class="mx-3" icon="mdi-heart" color="red" size="x-large"></v-icon>
          <v-icon class="mr-3" icon="mdi-comment-multiple" size="x-large"></v-icon>
          <v-icon icon="mdi-share" size="x-large"></v-icon>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-icon class="mx-3" icon="mdi-bookmark" size="x-large"></v-icon>
        </v-col>
      </v-row>

      <!-- like/comment/share stats -->
      <v-row class="mt-0 pb-1">
        <v-col class="mx-3 pt-0">
          <span class="text-body-2 text-gray">0 likes | 0 comments | 0 shares</span>
        </v-col>
      </v-row>

      <!-- note content, if includes image -->
      <!-- <v-row class="mt-0 pb-1">
        <v-col class="mx-3 pt-0">
          <span class="font_size_18 font-weight-medium text-body-1">tony </span>
          <span class="font-weight-light">&nbsp;{{
            event.content
          }}</span>
        </v-col>
      </v-row> -->

      <!-- note created at -->
      <v-row class="mt-0 mb-3">
        <v-col class="mx-3 pt-0">
          <span class="text-body-2 text-gray">{{
            event.created_at
          }}</span>
        </v-col>
      </v-row>

      <template v-slot:prepend>
        <v-avatar color="grey-darken-3"
          image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
      </template>
      <template v-slot:append>
        <div class="justify-self-end">
          <v-icon class="me-1" icon="mdi-dots-horizontal" size="x-large"></v-icon>
        </div>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import {
  relayInit,
  generatePrivateKey,
  getPublicKey,
  getEventHash,
  signEvent,
  validateEvent,
  verifySignature,
  nip05
} from 'nostr-tools'
// import fetch from 'node-fetch';

export default {
  data: () => ({
    events: [],
    publickey: '',
  }),

  methods: {
    async connectToRelays() {
      const relay = relayInit('wss://nostr.bostonbtc.com')
      await relay.connect()

      // let pk = '77e97a7c0a6e1f8664687f30a0380dea04fa2c9040939c7af6a050b1efbca9a3'

      // let profile = await nip05.queryProfile('hitony.com');
      // console.log(profile.pubkey)
      // let event = {
      //   kind: 1,
      //   created_at: Math.floor(Date.now() / 1000),
      //   tags: [],
      //   content: 'hello, world.',
      //   pubkey: pk
      // }

      // event.id = getEventHash(event)
      // event.sig = signEvent(event, sk)

      // let ok = validateEvent(event)
      // let veryOk = verifySignature(event)

      // console.log(ok)
      // console.log(veryOk)

      // let pub = relay.publish(event)
      // pub.on('ok', () => {
      //   console.log(`${relay.url} has accepted our event`)
      // })

      let sub = relay.sub([
        {
          kinds: [1],
          authors: [this.publickey],
          // since: 1676249760,
          limit: 10,
        }
      ])

      sub.on('event', event => {
        console.log('got event:', event)
        this.events.push(event)
      })

      relay.on('connect', () => {
        console.log(`connected to ${relay.url}`)
      })
      relay.on('error', () => {
        console.log(`failed to connect to ${relay.url}`)
      })
    }
  },
  async mounted() {
    this.publickey = localStorage.getItem('publickey');
    await this.connectToRelays();
  }
}
</script>

<style scoped>
.post_card {
  background-color: #0e1219;
  border-radius: 20px;
}

.font_size_18 {
  font-size: 18px !important;
}

.font-spacing-sm {
  letter-spacing: 0px;
}

.bordered {
  border: 1px solid #2c304c;
}
</style>