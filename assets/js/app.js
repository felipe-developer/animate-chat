;(function($, window, document, undefined) {
	'use strict';

	var chat = function() {
	    var p = Array.prototype.slice.call(document.querySelectorAll('._container .__chat')),
	        vScroll = 0,
	        adding = 0,
	        scroll = $('._container ._chat'),
	        lastChat,
	        qtChat,
	        interval;
	        chat = {
	            firstTalk: function() {
	                vScroll = 0, p[0].classList.add('active')
	            },
	            talk: function() {
	                function scrollUp() {
	                    return chatActive.forEach(function(el) {
	                        adding = el.offsetHeight + 10
	                    }), adding
	                }
	                var chatActive = Array.prototype.slice.call(document.querySelectorAll('._container .active'));
	                lastChat = chatActive[chatActive.length - 1], qtChat = 2, window.innerWidth >= 600 && window.innerHeight >= 557 && (qtChat = 3), lastChat.nextElementSibling ? (lastChat.nextElementSibling.classList.add('active'), chat.reset(), chatActive.length >= qtChat && (vScroll += scrollUp(), scroll.animate({
	                    top: -vScroll
	                }, 500), lastChat.nextElementSibling.classList.add('active'))) : (chatActive.forEach(function(el) {
	                    el.classList.remove('active')
	                }), scroll.css({
	                    top: 0
	                }), vScroll = 0, setTimeout(chat.firstTalk, 1e3), chat.reset())
	            },
	            reset: function() {
	                interval = setTimeout(chat.talk, 3e3)
	            }
	        };
	    chat.firstTalk(), setTimeout(chat.talk, 3e3)
	};

	$(function(){
		chat(console.log('%cRun!', 'color:#bada55'));
	});

})(jQuery, window, document);