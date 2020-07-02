<template>
  <a-card class="direct-chat">
    <template slot="header">
      <a-card-header :title="title_local">
        <a-card-header-tools slot="tools">
          <span data-toggle="tooltip" :title="messageLocal.title" :class="'badge badge-'+(messageLocal.msg_type || messageLocal.type)">{{messageLocal.amount}}</span>
          <a-card-header-tool-button-collapse/>
          <button type="button" class="btn btn-tool" data-toggle="tooltip" title="Contacts"
                  data-widget="chat-pane-toggle">
            <i class="fas fa-comments"></i>
          </button>
          <a-card-header-tools-button-remove/>
        </a-card-header-tools>
      </a-card-header>
    </template>
       <a-card-body>
        <!-- Conversations are loaded here -->
        <div class="direct-chat-messages">
          <!-- Message. Default to the left -->
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
            </div>
            <!-- /.direct-chat-infos -->
            <img class="direct-chat-img" src="@/assets/img/user1-128x128.jpg" alt="message user image">
            <!-- /.direct-chat-img -->
            <div class="direct-chat-text">
              Is this template really for free? That's unbelievable!
            </div>
            <!-- /.direct-chat-text -->
          </div>
          <!-- /.direct-chat-msg -->

          <!-- Message to the right -->
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
            </div>
            <!-- /.direct-chat-infos -->
            <img class="direct-chat-img" src="/dist/img/user3-128x128.jpg" alt="message user image">
            <!-- /.direct-chat-img -->
            <div class="direct-chat-text">
              You better believe it!
            </div>
            <!-- /.direct-chat-text -->
          </div>
          <!-- /.direct-chat-msg -->

          <!-- Message. Default to the left -->
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
            </div>
            <!-- /.direct-chat-infos -->
            <img class="direct-chat-img" src="/dist/img/user1-128x128.jpg" alt="message user image">
            <!-- /.direct-chat-img -->
            <div class="direct-chat-text">
              Working with AdminLTE on a great new app! Wanna join?
            </div>
            <!-- /.direct-chat-text -->
          </div>
          <!-- /.direct-chat-msg -->

          <!-- Message to the right -->
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
            </div>
            <!-- /.direct-chat-infos -->
            <img class="direct-chat-img" src="/dist/img/user3-128x128.jpg" alt="message user image">
            <!-- /.direct-chat-img -->
            <div class="direct-chat-text">
              I would love to.
            </div>
            <!-- /.direct-chat-text -->
          </div>
          <!-- /.direct-chat-msg -->

        </div>
        <!--/.direct-chat-messages-->

        <!-- Contacts are loaded here -->
        <div class="direct-chat-contacts">
          <ul class="contacts-list">
            <li>
              <a href="#">
                <img class="contacts-list-img" src="/dist/img/user1-128x128.jpg">

                <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Count Dracula
                                <small class="contacts-list-date float-right">2/28/2015</small>
                              </span>
                  <span class="contacts-list-msg">How have you been? I was...</span>
                </div>
                <!-- /.contacts-list-info -->
              </a>
            </li>
            <!-- End Contact Item -->
            <li>
              <a href="#">
                <img class="contacts-list-img" src="/dist/img/user7-128x128.jpg">

                <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Sarah Doe
                                <small class="contacts-list-date float-right">2/23/2015</small>
                              </span>
                  <span class="contacts-list-msg">I will be waiting for...</span>
                </div>
                <!-- /.contacts-list-info -->
              </a>
            </li>
            <!-- End Contact Item -->
            <li>
              <a href="#">
                <img class="contacts-list-img" src="/dist/img/user3-128x128.jpg">

                <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Nadia Jolie
                                <small class="contacts-list-date float-right">2/20/2015</small>
                              </span>
                  <span class="contacts-list-msg">I'll call you back at...</span>
                </div>
                <!-- /.contacts-list-info -->
              </a>
            </li>
            <!-- End Contact Item -->
            <li>
              <a href="#">
                <img class="contacts-list-img" src="/dist/img/user5-128x128.jpg">

                <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Nora S. Vans
                                <small class="contacts-list-date float-right">2/10/2015</small>
                              </span>
                  <span class="contacts-list-msg">Where is your new...</span>
                </div>
                <!-- /.contacts-list-info -->
              </a>
            </li>
            <!-- End Contact Item -->
            <li>
              <a href="#">
                <img class="contacts-list-img" src="/dist/img/user6-128x128.jpg">

                <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                John K.
                                <small class="contacts-list-date float-right">1/27/2015</small>
                              </span>
                  <span class="contacts-list-msg">Can I take a look at...</span>
                </div>
                <!-- /.contacts-list-info -->
              </a>
            </li>
            <!-- End Contact Item -->
            <li>
              <a href="#">
                <img class="contacts-list-img" src="/dist/img/user8-128x128.jpg">

                <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Kenneth M.
                                <small class="contacts-list-date float-right">1/4/2015</small>
                              </span>
                  <span class="contacts-list-msg">Never mind I found...</span>
                </div>
                <!-- /.contacts-list-info -->
              </a>
            </li>
            <!-- End Contact Item -->
          </ul>
          <!-- /.contacts-list -->
        </div>
        <!-- /.direct-chat-pane -->
      </a-card-body>
    <template slot="footer">
      <a-card-footer>
        <form action="#" method="post">
          <div class="input-group">
            <input type="text" name="message" placeholder="Type Message ..." class="form-control">
            <span class="input-group-append">
              <button type="button" :class="'btn btn-' +messageLocal.type">Send</button>
            </span>
          </div>
        </form>
      </a-card-footer>
    </template>
  </a-card>
</template>
<script>
import ACard from '@/components/Widget/Card/ACard'
import ACardBody from '@/components/Widget/Card/ACardBody'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardFooter from '@/components/Widget/Card/ACardFooter'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonCollapse
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonCollapse'
import ACardHeaderToolsButtonRemove
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonRemove'

export default {
  name: 'ACardDirectChat',
  components: {
    ACardHeaderToolsButtonRemove,
    ACardHeaderToolButtonCollapse,
    ACardHeaderTools,
    ACardFooter,
    ACardHeader,
    ACardBody,
    ACard
  },
  data () {
    return {
      title_local: this.title,
      messageLocal: this.message ?? {}
    }
  },
  props: {
    title: String,
    message: Object
  }
}
</script>
