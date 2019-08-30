<template>
    <nav>
        <ul>
            <li><a class="home">首页</a></li>
            <li><a class="nav1">频道1</a></li>
            <li><a class="nav2">频道2</a></li>
            <li><a class="nav3">频道3</a></li>
            <li><a class="nav4">频道4</a></li>
            <li><a class="nav5">频道5</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
}
</script>
<style>
html, body {
    background-color: #dfdede;
}
li {
    padding: 3px 10px;
    border-bottom: 1px solid #d4d3d3;
}
li:active {
    background-color: #3ABA63;
}
li a {
    display: block;
    padding: 10px 30px;
}
</style>
