<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Widgets</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Widgets</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <h5 class="mb-2">Info Box</h5>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box text="Messages" number="1,410" icon="far fa-envelope" icon_class="bg-info"/>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box text="Bookmarks" number="410" icon="far fa-flag" icon_class="bg-success"/>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box text="Uploads" number="13,648" icon="far fa-copy" icon_class="bg-warning"/>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box text="Likes" number="93,139" icon="far fa-star" icon_class="bg-danger"/>
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- =========================================================== -->
        <h5 class="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-info" text="Bookmarks" number="41,410" icon="far fa-bookmark" no_elevation>
              <template slot="content_footer">
                <BProgress ><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </template>
            </a-info-box>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-success" text="Likes" number="41,410" icon="far fa-thumbs-up">
              <template slot="content_footer">
                <BProgress><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </template>
            </a-info-box>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-warning" text="Events" number="41,410" icon="far fa-calendar-alt">
              <template slot="content_footer">
                <BProgress><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </template>
            </a-info-box>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-danger" text="Comments" number="41,410" icon="fas fa-comments">
              <template slot="content_footer">
                <BProgress><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                  70% Increase in 30 Days
                </span>
              </template>
            </a-info-box>
         </div>
        </div>

        <!-- =========================================================== -->
        <h5 class="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-gradient-info" text="Bookmarks" number="41,410" icon="far fa-bookmark" no_elevation>
              <template slot="content_footer">
                <BProgress ><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                      70% Increase in 30 Days
                    </span>
              </template>
            </a-info-box>
          </div>

          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-gradient-success" text="Likes" number="41,410" icon="far fa-thumbs-up">
              <template slot="content_footer">
                <BProgress><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                      70% Increase in 30 Days
                    </span>
              </template>
            </a-info-box>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-gradient-warning" text="Events" number="41,410" icon="far fa-calendar-alt">
              <template slot="content_footer">
                <BProgress><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                      70% Increase in 30 Days
                    </span>
              </template>
            </a-info-box>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <a-info-box class="bg-gradient-danger" text="Comments" number="41,410" icon="fas fa-comments">
              <template slot="content_footer">
                <BProgress><BProgressBar value="70%"/></BProgress>
                <span class="progress-description">
                      70% Increase in 30 Days
                    </span>
              </template>
            </a-info-box>
          </div>
        </div>
        <!-- =========================================================== -->

        <!-- Small Box (Stat card) -->
        <h5 class="mb-2 mt-4">Small Box</h5>
        <div class="row">
          <div class="col-lg-3 col-6">
            <CardIndicator class="bg-info" icon="fas fa-shopping-cart">
              <template slot="value"><h3>150</h3></template>
              <template slot="text"><p>New Orders</p></template>
            </CardIndicator>
          </div>
          <div class="col-lg-3 col-6">
            <CardIndicator class="bg-success" icon="ion ion-stats-bars">
              <template slot="value"><h3>53<sup style="font-size: 20px">%</sup></h3></template>
              <template slot="text"><p>Bounce Rate</p></template>
            </CardIndicator>
          </div>
          <div class="col-lg-3 col-6">
            <CardIndicator class="bg-warning" icon="fas fa-user-plus">
              <template slot="value"><h3>44</h3></template>
              <template slot="text"><p>User Registrations</p></template>
            </CardIndicator>
          </div>
          <div class="col-lg-3 col-6">
            <CardIndicator class="bg-danger" icon="fas fa-chart-pie">
              <template slot="value"><h3>65</h3></template>
              <template slot="text"><p>Unique Visitors</p></template>
            </CardIndicator>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-6">
              <CardIndicator class="bg-info" icon="fas fa-shopping-cart" loading>
                <template slot="value"><h3>150</h3></template>
                <template slot="text"><p>New Orders</p></template>
              </CardIndicator>
            </div>
            <div class="col-lg-3 col-6">
              <CardIndicator class="bg-success" icon="ion ion-stats-bars" loading>
                <template slot="value"><h3>53<sup style="font-size: 20px">%</sup></h3></template>
                <template slot="text"><p>Bounce Rate</p></template>
              </CardIndicator>
            </div>
            <div class="col-lg-3 col-6">
              <CardIndicator class="bg-warning" icon="fas fa-user-plus" loading>
                <template slot="value"><h3>44</h3></template>
                <template slot="text"><p>User Registrations</p></template>
              </CardIndicator>
            </div>
            <div class="col-lg-3 col-6">
              <CardIndicator class="bg-danger" icon="fas fa-chart-pie" loading>
                <template slot="value"><h3>65</h3></template>
                <template slot="text"><p>Unique Visitors</p></template>
              </CardIndicator>
            </div>
          </div>
        <!-- =========================================================== -->
        <h4 class="mb-2 mt-4">Cards</h4>
        <h5 class="mb-2">Abilities</h5>
        <div class="row">
          <div class="col-md-3">
            <CardExpandable title="Expandable" :body="body_default" collapsed/>
          </div>
          <div class="col-md-3">
            <CardCollapsable class="card-success" title="Collapsable" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <CardRemovable class="card-warning" title="Removable" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <CardMaximizable class="card-danger" title="Maximizable" :body="body_default"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <CardRefresh ref="cardRefreshOne" title="Card Refresh" :body="data.card.refresh.one.body" v-on:refreshBody="updateCardRefreshOneBody()" :loading="data.card.refresh.one.loading"/>
          </div>
          <div class="col-md-3">
            <a-card class="card-success">
              <a-card-header slot="header" title="All together">
                <template slot="tools">
                  <button type="button" ref="cardRefreshTwo" class="btn btn-tool" @click="updateBodyCardRefreshTwo()"><i class="fas fa-sync-alt"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                </template>
              </a-card-header>
              <BCardBody slot="body" class="text-center">
                <div class="spinner-border" role="status" v-if="data.card.refresh.two.loading">
                  <span class="sr-only">Loading...</span>
                </div>
                <span v-else>{{data.card.refresh.two.body}}</span>
              </BCardBody>
            </a-card>
          </div>
          <div class="col-md-3">
            <ACardEmptyBodyLoadable
              class="card-warning"
              btn_ref="card_three_button1"
              title="Loading state 1"
              @cardButtonClicked="updateCardBodyStateLight"
              overlay_color="light"
              action_background="bg-warning"
              :action="{progress: {variant: 'warning'}}"
            />
          </div>
          <div class="col-md-3">
            <ACardEmptyBodyLoadable
              class="card-danger"
              title="Loading state (dark)"
              body="Loading state (dark) body"
              btn_ref="card_three_button1"
              @cardButtonClicked="updateCardBody"
              overlay_color="dark"
              action_background="bg-danger"
            />
          </div>
        </div>

        <h5 class="mb-2">Colors Variations</h5>
        <div class="row">
          <div class="col-md-3">
            <a-card-primary title="Primary" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-success title="Success" :body="body_default"/>
          </div>

          <div class="col-md-3">
            <a-card-warning title="Warning" :body="body_default"/>
          </div>

          <div class="col-md-3">
            <a-card-danger title="Danger" :body="body_default"/>
          </div>

        </div>
        <!--default card abilities-->
        <div class="row">
          <div class="col-md-3">
            <a-card-default title="Default" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-default collapsable title="Collapsable" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-default removable title="Removable" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-default maximizable title="Maximizable" :body="body_default"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <a-card-primary outline title="Primary Outline" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-success outline title="Success Outline" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-warning outline title="Warning Outline" :body="body_default"/>
          </div>
          <div class="col-md-3">
            <a-card-danger outline title="Danger Outline" :body="body_default"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <a-card-primary title="Primary" :body="body_default" all_painted/>
          </div>
          <div class="col-md-3">
            <a-card-success title="Success" :body="body_default" all_painted/>
          </div>
          <div class="col-md-3">
            <a-card-warning title="Warning" :body="body_default" all_painted/>
          </div>
          <div class="col-md-3">
            <a-card-danger title="Danger" :body="body_default" all_painted/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <a-card-primary color="" title="Primary Gradient" :body="body_default" all_painted gradient/>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <a-card-success title="Primary Gradient" :body="body_default" all_painted gradient/>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <a-card-warning title="Primary Gradient" :body="body_default" all_painted gradient/>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <a-card-danger title="Primary Gradient" :body="body_default" all_painted gradient/>
          </div>
          <!-- /.col -->
        </div>
        <h4 class="mt-4 mb-2">Direct Chat</h4>
        <div class="row">
          <div class="col-md-3">
            <ACardDirectChat class="direct-chat-primary" title="Direct Chat" :message="chats.primary"/>
          </div>
          <div class="col-md-3">
            <ACardDirectChat class="direct-chat-success" title="Direct Chat" :message="chats.success"/>
          </div>
          <div class="col-md-3">
            <ACardDirectChat class="card-warning direct-chat-warning" title="Direct Chat" :message="chats.warning"/>
          </div>
         <div class="col-md-3">
            <ACardDirectChat class="card-danger direct-chat-danger" title="Direct Chat" :message="chats.danger"/>
          </div>
        </div>
        <h3 class="mt-4 mb-4">Social Widgets</h3>
        <div class="row">
          <div class="col-md-4">
            <a-card-profile-activities type="warning"
                 user_name="Nadia Carmichael"
                 user_desc="Lead Developer"
                 :items="cardProfileActivities"
              >
                <template slot="usr_img">
                  <a-user-image src="/dist/img/user7-128x128.jpg" alt="User Avatar"/>
                </template>
              </a-card-profile-activities>
          </div>
          <div class="col-md-4">
            <a-card-profile :items="carProfileItems" user_name="Alexander Pierce" user_desc="Founder & CEO">
              <a-user-image src="/dist/img/user1-128x128.jpg" alt="User Avatar" slot="usr_img"/>
            </a-card-profile>
          </div>
          <div class="col-md-4">
            <a-card-profile :items="carProfileItems"
              user_name="Elizabeth Pierce" user_desc="Web Designer"
              header_img="background: url('/dist/img/photo1.png') center center;"
              user_info_direction="text-right"
            >
              <a-user-image src="/dist/img/user3-128x128.jpg" alt="User Avatar" slot="usr_img" elevation=""/>
            </a-card-profile>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <!-- Box Comment -->
            <a-social-post
              user_img="/dist/img/user1-128x128.jpg"
              user_name="Jonathan Burke Jr."
              user_desc="Shared publicly - 7:30 PM Today"
              v-bind="socialPosts[1]"
              user_logged_name="Davi Menezes"
              user_logged_img="https://avatars3.githubusercontent.com/u/3998868?s=460&v=4"
            />
          </div>
          <!-- /.col -->
          <div class="col-md-6">
            <a-social-post
              user_img="/dist/img/user1-128x128.jpg"
              user_name="Jonathan Burke Jr."
              user_desc="Shared publicly - 7:30 PM Today"
              user_logged_name="Davi Menezes"
              user_logged_img="https://avatars3.githubusercontent.com/u/3998868?s=460&v=4"
              v-bind="socialPosts[2]"
            />
          </div>
        </div>
    </section>
    <ABackToTop/>
  </div>
</template>
<script>
import CardIndicator from '@/components/Widget/Specific/CardIndicator'
import CardExpandable from '@/components/Widget/Specific/ACardExpandable'
import CardCollapsable from '@/components/Widget/Specific/ACardCollapsable'
import CardRemovable from '@/components/Widget/Specific/ACardRemovable'
import CardMaximizable from '@/components/Widget/Specific/ACardMaximizable'
import CardRefresh from '@/components/Widget/Specific/ACardRefresh'
import Vue from 'vue'
import ACard from '@/components/Widget/Card/ACard'
import ACardEmptyBodyLoadable from '@/components/Widget/Specific/ACardEmptyBodyLoadable'
import ACardWarning from '@/components/Widget/Card/Color/ACardWarning'
import ACardDanger from '@/components/Widget/Card/Color/ACardDanger'
import ACardPrimary from '@/components/Widget/Card/Color/ACardPrimary'
import ACardDefault from '@/components/Widget/Card/Color/ACardDefault'
import ACardSuccess from '@/components/Widget/Card/Color/ACardSuccess'
import ACardDirectChat from './Dashboards/2/ACardDirectChat'
import ACardProfileActivities from '@/components/Widget/Card/Profile/ACardProfileActivities'
import ACardProfile from '@/components/Widget/Card/Profile/ACardProfile'
import ASocialPost from '@/components/Widget/Card/Social/Post/ASocialPost'
import ABackToTop from '@/components/ABackToTop'
import ACardHeader from '@/components/Widget/Card/ACardHeader'
import AInfoBox from '@/components/Widget/AInfoBox'

const eventBus = new Vue()

export default {
  name: 'APageWidgets',
  components: {
    AInfoBox,
    ACardHeader,
    ABackToTop,
    ASocialPost,
    ACardProfile,
    ACardProfileActivities,
    ACardDirectChat,
    ACardSuccess,
    ACardDefault,
    ACardPrimary,
    ACardDanger,
    ACardWarning,
    ACardEmptyBodyLoadable,
    ACard,
    CardRefresh,
    CardIndicator,
    CardExpandable,
    CardCollapsable,
    CardRemovable,
    CardMaximizable
  },
  data () {
    return {
      chats: {
        primary: { title: '3 New Messages', amount: 3, type: 'primary' },
        success: { title: '3 New Messages', amount: 3, type: 'success' },
        warning: { title: '3 New Messages', amount: 3, type: 'warning', msg_type: 'danger' },
        danger: { title: '3 New Messages', amount: 3, type: 'danger', msg_type: 'light' }
      },
      body_default: 'The body of the card',
      data: {
        card: {
          body: 'The body of the card',
          refresh: {
            one: { body: 'The body of the card', loading: false },
            two: { body: 'The body of the card', loading: false },
            three: {
              body: '',
              loading: false,
              loading_2: true,
              loaded: false,
              class: 'd-inline-block' + this.data.card.refresh.three.loading ? ' disable' : '',
              onHidden: () => this.$refs.card_three_button.focus()
            }
          }
        }
      },
      cardProfileActivities: [
        { title: 'Projects', url: '#', amount: 31, type: 'primary' },
        { title: 'Tasks', url: '#', amount: 5, type: 'info' },
        { title: 'Completed Projects', url: '#', amount: 12, type: 'success' },
        { title: 'Followers', url: '#', amount: 842, type: 'danger' }
      ],
      carProfileItems: [
        { header: '3,200', text: 'SALES' },
        { header: '13,000', text: 'FOLLOWERS' },
        { header: '35', text: 'PRODUCTS' }
      ],
      socialPosts: {
        1: {
          img: '/dist/img/photo2.png',
          content: 'I took this photo this morning. What do you guys think?',
          likes: '127',
          comments: [
            {
              content: 'It is a long established fact that a reader will be distracted\n' +
                'by the readable content of a page when looking at its layout.',
              when: new Date().toLocaleString(),
              user: { name: 'Maria Gonzales', img: '/dist/img/user3-128x128.jpg' }
            },
            {
              user: { name: 'Davi Menezes', img: 'https://avatars3.githubusercontent.com/u/3998868?s=460&v=4' },
              content: 'likee https://adminlte.vuejs.ml/',
              when: new Date().toLocaleString()
            },
            {
              content: 'It is a long established fact that a reader will be distracted\n' +
                'by the readable content of a page when looking at its layout.',
              when: new Date().toLocaleString(),
              user: { name: 'Luna Stark', img: '/dist/img/user4-128x128.jpg' }
            }
          ]
        },
        2: {
          content: '<p>Far far away, behind the word mountains, far from the\n' +
            'countries Vokalia and Consonantia, there live the blind\n' +
            'texts. Separated they live in Bookmarksgrove right at\n</p>' +
            '\n' +
            'the coast of the Semantics, a large language ocean.\n' +
            'A small river named Duden flows by their place and supplies\n' +
            'it with the necessary regelialia. It is a paradisematic\n' +
            'country, in which roasted parts of sentences fly into\n' +
            'your mouth.',
          likes: '45',
          attachment: {
            img: '/dist/img/photo1.png',
            url: 'https://www.lipsum.com/',
            title: 'Lorem ipsum text generator',
            content: 'Description about the attachment can be placed here.\n' +
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
          },
          comments: [
            {
              content: 'It is a long established fact that a reader will be distracted\n' +
                'by the readable content of a page when looking at its layout.',
              when: new Date().toLocaleString(),
              user: { name: 'Maria Gonzales', img: '/dist/img/user3-128x128.jpg' }
            },
            {
              user: { name: 'Davi Menezes', img: 'https://avatars3.githubusercontent.com/u/3998868?s=460&v=4' },
              content: 'likee https://adminlte.vuejs.ml/',
              when: new Date().toLocaleString()
            },
            {
              content: 'It is a long established fact that a reader will be distracted\n' +
                'by the readable content of a page when looking at its layout.',
              when: new Date().toLocaleString(),
              user: { name: 'Luna Stark', img: '/dist/img/user4-128x128.jpg' }
            }
          ]
        }
      }
    }
  },
  provide () {
    return {
      eventBus
    }
  },
  methods: {
    updateCardRefreshOneBody () {
      this.$refs.cardRefreshOne.setLoading(true)
      setTimeout(() => {
        this.$refs.cardRefreshOne.bodyLocal = 'The body of the card after card refresh'
        this.$refs.cardRefreshOne.setLoading(false)
      }, 1000)

      setTimeout(() => eventBus.$emit('updateBody', this.data.card.body), 5000)
    },
    updateBodyCardRefreshTwo () {
      this.data.card.refresh.two.loading = true
      setTimeout(() => {
        this.data.card.refresh.two.body = 'The body of the card after card refresh'
        this.data.card.refresh.two.loading = false
      }, 1000)

      setTimeout(() => {
        this.data.card.refresh.two.body = this.data.card.body
      }, 5000)
    },
    clickCardThreeButon () {
      this.data.card.refresh.three.loading = true
      const body = 'The body of the card'
      this.data.card.refresh.three.body = ''
      setTimeout(() => {
        this.data.card.refresh.three.body = body + ' <b>updated</b>'
        this.data.card.refresh.three.loading = false
        this.data.card.refresh.three.loading_2 = false
        this.data.card.refresh.three.loaded = true
      }, 3000)
    },
    updateCardBodyStateLight (vm) {
      vm.comp.loading_local = true

      // loading progress
      let value = 0
      const step = 300
      const timeTotal = 3000
      vm.comp.$set(vm.comp.action_local.progress, 'value', value)
      vm.comp.action_local.progress.max = timeTotal

      const interval = setInterval(() => {
        value += 300
        if (value >= timeTotal) {
          clear()
        }
        vm.comp.action_local.progress.value = value
      }, step)

      const clear = () => clearInterval(interval)

      this.loadCardBodyContent(vm)

      this.resetCardBodyContent(vm, () => {
        vm.comp.action_local.progress.value = 0
      })
    },
    loadCardBodyContent (vm) {
      setTimeout(() => {
        vm.comp.body_local = vm.comp.title_local + ' <b>has been loaded</b>'
        vm.comp.loading_local = false
        vm.comp.body_loading_local = false
        vm.comp.loaded = true
      }, 3000)
    },
    resetCardBodyContent (vm, callback = null) {
      setTimeout(() => {
        vm.comp.body_local = vm.comp.body
        vm.comp.loading_local = false
        vm.comp.loaded = false

        if (callback) {
          callback()
        }
      }, 5000)
    },
    updateCardBody (vm) {
      vm.comp.loading_local = true

      this.loadCardBodyContent(vm)

      this.resetCardBodyContent(vm)
    }
  }
}
</script>
