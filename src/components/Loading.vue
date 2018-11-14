<template>
  <div id="fountainG" :style="{display: loadingInfo.display}">
    <div id="fountainG_1" class="fountainG"></div>
    <div id="fountainG_2" class="fountainG"></div>
    <div id="fountainG_3" class="fountainG"></div>
    <div id="fountainG_4" class="fountainG"></div>
    <div id="fountainG_5" class="fountainG"></div>
    <div id="fountainG_6" class="fountainG"></div>
    <div id="fountainG_7" class="fountainG"></div>
    <div id="fountainG_8" class="fountainG"></div>
  </div>  
</template>
<script>
  export default {
    props: {
      loadingInfo: Object
    }
  }
</script>

<style scoped lang="less">
#fountainG{
	position:relative;
	width:84px;
	height:10px;
	margin:auto;
}

.fountainG{
	position:absolute;
	top:0;
	background-color:rgb(0,128,255);
	width:10px;
	height:10px;
	animation-name:bounce_fountainG;
		-o-animation-name:bounce_fountainG;
		-ms-animation-name:bounce_fountainG;
		-webkit-animation-name:bounce_fountainG;
		-moz-animation-name:bounce_fountainG;
	animation-duration:1.5s;
		-o-animation-duration:1.5s;
		-ms-animation-duration:1.5s;
		-webkit-animation-duration:1.5s;
		-moz-animation-duration:1.5s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
	transform:scale(.3);
		-o-transform:scale(.3);
		-ms-transform:scale(.3);
		-webkit-transform:scale(.3);
		-moz-transform:scale(.3);
	border-radius:7px;
		-o-border-radius:7px;
		-ms-border-radius:7px;
		-webkit-border-radius:7px;
		-moz-border-radius:7px;
}

#fountainG_1{
	left:0;
	animation-delay:0.6s;
		-o-animation-delay:0.6s;
		-ms-animation-delay:0.6s;
		-webkit-animation-delay:0.6s;
		-moz-animation-delay:0.6s;
}

#fountainG_2{
	left:10px;
	animation-delay:0.75s;
		-o-animation-delay:0.75s;
		-ms-animation-delay:0.75s;
		-webkit-animation-delay:0.75s;
		-moz-animation-delay:0.75s;
}

#fountainG_3{
	left:21px;
	animation-delay:0.9s;
		-o-animation-delay:0.9s;
		-ms-animation-delay:0.9s;
		-webkit-animation-delay:0.9s;
		-moz-animation-delay:0.9s;
}

#fountainG_4{
	left:31px;
	animation-delay:1.05s;
		-o-animation-delay:1.05s;
		-ms-animation-delay:1.05s;
		-webkit-animation-delay:1.05s;
		-moz-animation-delay:1.05s;
}

#fountainG_5{
	left:42px;
	animation-delay:1.2s;
		-o-animation-delay:1.2s;
		-ms-animation-delay:1.2s;
		-webkit-animation-delay:1.2s;
		-moz-animation-delay:1.2s;
}

#fountainG_6{
	left:52px;
	animation-delay:1.35s;
		-o-animation-delay:1.35s;
		-ms-animation-delay:1.35s;
		-webkit-animation-delay:1.35s;
		-moz-animation-delay:1.35s;
}

#fountainG_7{
	left:63px;
	animation-delay:1.5s;
		-o-animation-delay:1.5s;
		-ms-animation-delay:1.5s;
		-webkit-animation-delay:1.5s;
		-moz-animation-delay:1.5s;
}

#fountainG_8{
	left:73px;
	animation-delay:1.64s;
		-o-animation-delay:1.64s;
		-ms-animation-delay:1.64s;
		-webkit-animation-delay:1.64s;
		-moz-animation-delay:1.64s;
}



@keyframes bounce_fountainG{
	0%{
	transform:scale(1);
		background-color:rgb(0,128,255);
	}

	100%{
	transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-o-keyframes bounce_fountainG{
	0%{
	-o-transform:scale(1);
		background-color:rgb(0,128,255);
	}

	100%{
	-o-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-ms-keyframes bounce_fountainG{
	0%{
	-ms-transform:scale(1);
		background-color:rgb(0,128,255);
	}

	100%{
	-ms-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-webkit-keyframes bounce_fountainG{
	0%{
	-webkit-transform:scale(1);
		background-color:rgb(0,128,255);
	}

	100%{
	-webkit-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-moz-keyframes bounce_fountainG{
	0%{
	-moz-transform:scale(1);
		background-color:rgb(0,128,255);
	}

	100%{
	-moz-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}
</style>
