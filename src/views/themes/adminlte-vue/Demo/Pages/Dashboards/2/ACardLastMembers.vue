<template>
  <Card>
    <template slot="header">
      <CardHeader title="Latest Members">
        <span class="badge badge-danger">8 New Members</span>
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
        </button>
        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
        </button>
      </CardHeader>
    </template>
    <template slot="body">
      <CardBody class="p-0">
        <ul class="users-list clearfix">
          <li>
            <img src="/dist/img/user1-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">Alexander Pierce</a>
            <span class="users-list-date">Today</span>
          </li>
          <li>
            <img src="/dist/img/user8-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">Norman</a>
            <span class="users-list-date">Yesterday</span>
          </li>
          <li>
            <img src="/dist/img/user7-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">Jane</a>
            <span class="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src="/dist/img/user6-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">John</a>
            <span class="users-list-date">12 Jan</span>
          </li>
          <li>
            <img src="/dist/img/user2-160x160.jpg" alt="User Image">
            <a class="users-list-name" href="#">Alexander</a>
            <span class="users-list-date">13 Jan</span>
          </li>
          <li>
            <img src="/dist/img/user5-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">Sarah</a>
            <span class="users-list-date">14 Jan</span>
          </li>
          <li>
            <img src="/dist/img/user4-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">Nora</a>
            <span class="users-list-date">15 Jan</span>
          </li>
          <li>
            <img src="/dist/img/user3-128x128.jpg" alt="User Image">
            <a class="users-list-name" href="#">Nadia</a>
            <span class="users-list-date">15 Jan</span>
          </li>
        </ul>
      </CardBody>
    </template>
    <template slot="footer">
      <CardFooter class="text-center">
        <a href="javascript:">View All Users</a>
      </CardFooter>
    </template>
  </Card>
</template>
<script>
import Card from '../../../../../../../components/Widget/Card/ACard'
import CardHeader from '../../../../../../../components/Widget/Card/ACardHeader'
import CardBody from '../../../../../../../components/Widget/Card/ACardBody'
import CardFooter from '../../../../../../../components/Widget/Card/ACardFooter'
export default {
  name: 'ACardLastMembers',
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  },
  data () { return { } },
  props: { }
}
</script>
