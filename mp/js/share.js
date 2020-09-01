$.post("/e/ecmsshop/wxfx/",{rand:Math.random()},function(data){
 var obj = eval( "(" + data + ")" );
 wx.config({
    debug:false,
    appId: obj.appId,
    timestamp:obj.timestamp,
    nonceStr:obj.nonceStr,
    signature:obj.signature,
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表
		//'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
        //'onMenuShareQQ',
        //'onMenuShareWeibo',
        //'onMenuShareQZone'
    ]
  });
  wx.ready(function () {
    // 在这里调用 API
	//分享给朋友圈
	wx.onMenuShareTimeline({
		title: '[!--title--]',
		link: '[!--titleurl--]', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: '[!--titlepic--]', // 分享图标
		success: function () { 
			// 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});
	//分享给朋友
	wx.onMenuShareAppMessage({
		title: '[!--title--]',
		desc: '[!--smalltext--]', // 分享描述
		link: '[!--titleurl--]', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: '[!--titlepic--]', // 分享图标
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () { 
			// 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});
  });
})