var newdata = '';
var perf1 = '';
var perf2 = '';
var demoflag = false;
$(document).ready(function(){
	var backaudio = document.getElementById('backaudio');
	backaudio.volume = 0.5;
	var jsondata = [
    {
        "title": "enlarged tongue",
        "subtitle": "enlarged tongue",
        "charset": ["enlarged", "tongue"],
        "count":10,
        "chars":["g","e"],
        "percent":70,
        "notation":"an",
        "reference":"Wraith 2008 p5a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		},
   {
        "title":"otitis media",
        "subtitle":"otitis media",
        "charset": ["otitis", "media"],
        "count":8,
        "chars":["t","m"],
        "percent":72,
        "notation":"",
        "reference":"Keilmann 2011 p4a",
        "wraith":"Keilmann A",
        "year":"J Inherit Metab Dis 2012; 35(2): 343–353."
		},
   {
        "title":"enlarged tonsils/adenoids",
        "subtitle":"enlarged tonsils/adenoids",
        "charset": ["enlarged", "tonsils/adenoids"],
        "count":11,
        "chars":["g","t","/","i"],
        "percent":68,
        "notation":"",
        "reference":"Wraith 2008 p5a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		},
   {
        "title":"coarse facial features",
        "subtitle":"coarse facial features",
        "charset": ["coarse", "facial features"],
        "count":11,
        "chars":["c","a","e"],
        "percent":95,
        "notation":"",
        "reference":"Wraith 2008 p5a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		},
   {
        "title":"nasal obstruction",
        "subtitle":"nasal obstruction",
        "charset": ["nasal", "obstruction"],
        "count":11,
        "chars":["s","u"],
        "percent":34,
        "notation":"",
        "reference":"Wraith 2008 p5a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		},
   {
        "title":"adenoidectomy",
        "subtitle":"adenoidectomy",
        "charset": ["adenoidectomy"],
        "count":10,
        "chars":["y"],
        "percent":47,
        "notation":"",
        "reference":"Keilmann 2011 p4a",
        "wraith":"Keilmann A",
        "year":"J Inherit Metab Dis 2012; 35(2): 343–353."
		},
   {
        "title":"t-tube insertion",
        "subtitle":"t-tube insertion",
        "charset": ["t-tube", "insertion"],
        "count":9,
        "chars":["b","-","r"],
        "percent":50,
        "notation":"",
        "reference":"Keilmann 2011 p4a",
        "wraith":"Keilmann A",
        "year":"J Inherit Metab Dis 2012; 35(2): 343–353."
		},
   {
        "title":"otorrhoea",
        "subtitle":"otorrhoea",
        "charset": ["otorrhoea"],
        "count":6,
        "chars":["h"],
        "percent":33,
        "notation":"",
        "reference":"Keilmann 2011 p4a",
        "wraith":"Keilmann A",
        "year":"J Inherit Metab Dis 2012; 35(2): 343–353."
		},
   {
        "title":"tonsillectomy",
        "subtitle":"tonsillectomy",
        "charset": ["tonsillectomy"],
        "count":10,
        "chars":["c"],
        "percent":36,
        "notation":"a",
        "reference":"Mendelsohn 2010 p3a",
        "wraith":"Mendelsohn NJ",
        "year":"Genet Med 2010; 12(12): 816–822."
		},
   {
        "title":"hearing loss",
        "subtitle":"hearing loss",
        "charset": ["hearing", "loss"],
        "count":10,
        "chars":["a","r"],
        "percent":67,
        "notation":"",
        "reference":"Keilmann 2011 p4a",
        "wraith":"Keilmann A",
        "year":"J Inherit Metab Dis 2012; 35(2): 343–353."
		},
   {
        "title":"hearing aid use",
        "subtitle":"hearing aids",
        "charset": ["hearing", "aid use"],
        "count":10,
        "chars":["a","n","g"],
        "percent":41,
        "notation":"use",
        "reference":"Keilmann 2011 p4a",
        "wraith":"Keilmann A",
        "year":"J Inherit Metab Dis 2012; 35(2): 343–353."
		},
   {
        "title":"abdominal hernia",
        "subtitle":"abdominal hernia",
        "charset": ["abdominal", "hernia"],
        "count":11,
        "chars":["d","r"],
        "percent":78,
        "notation":"an",
        "reference":"Wraith 2008 p5a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		},
   {
        "title":"delayed walking",
        "subtitle":"delayed walking",
        "charset": ["delayed", "walking"],
        "count":10,
        "chars":["e","k"],
        "percent":37,
        "notation":"",
        "reference":"Muenzer 2011 p3a",
        "wraith":"Muenzer J",
        "year":"Genet Med 2011; 13(2): 102–109."
		},
   {
        "title":"enlarged liver/spleen",
        "subtitle":"enlarged liver or spleen",
        "charset": ["enlarged", "liver/spleen"],
        "count":11,
        "chars":["n","g","v","/"],
        "percent":89,
        "notation":"an",
        "reference":"Wraith 2008 p5a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		},
   {
        "title":"joint stiffness",
        "subtitle":"joint stiffness",
        "charset": ["joint", "stiffness"],
        "count":8,
        "chars":["t","e"],
        "percent":75,
        "notation":"",
        "reference":"Link 2010 p4c",
        "wraith":"Link B",
        "year":"Orthop Rev 2010. 2: e16."
		},
   {
        "title":"claw hand",
        "subtitle":"claw hand",
        "charset": ["claw", "hand"],
        "count":7,
        "chars":["h","n"],
        "percent":53,
        "notation":"",
        "reference":"Link 2010 p4c",
        "wraith":"Link B",
        "year":"Orthop Rev 2010. 2: e16."
		},
   {
        "title":"cardiac valve disease",
        "subtitle":"cardiac valve disease",
        "charset": ["cardiac", "valve disease"],
        "count":9,
        "chars":["a","d","i"],
        "percent":63,
        "notation":"",
        "reference":"Kampmann 2011 p3a",
        "wraith":"Kampmann C",
        "year":"J Pediatr 2011; 159(2): 327–331."
		},
   {
        "title":"kyphosis/scoliosis",
        "subtitle":"kyphosis or scoliosis",
        "charset": ["kyphosis/", "scoliosis"],
        "count":9,
        "chars":["p","l","/"],
        "percent":34,
        "notation":"",
        "reference":"Link 2010 p4c",
        "wraith":"Link B",
        "year":"Orthop Rev 2010. 2: e16."
		},
   {
        "title":"heart murmur",
        "subtitle":"heart murmur",
        "charset": ["heart", "murmur"],
        "count":7,
        "chars":["h","t"],
        "percent":62,
        "notation":"a",
        "reference":"Wraith 2008 p6a",
        "wraith":"Wraith JE",
        "year":"Genet Med 2008; 10(7): 508–516."
		}
];

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
		jsondata = shuffle(jsondata);
		polling();
		var jsoncount = jsondata.length;
		var charsplit = jsondata[0].chars;
		function alpha(chars){
			var charactersfirst = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
			var fstring ='';
			$.each(charactersfirst,function(i,val){
				if(jQuery.inArray(val, chars)>-1){
					fstring +='<button class="alpha complete" id="char_'+val+'" data-value="'+val+'" style="margin-right: 5px;"><span>'+val+'</span></button>';
				}else{
					fstring +='<button class="alpha" id="char_'+val+'" data-value="'+val+'" style="margin-right: 5px;"><span>'+val+'</span></button>';
				}
			});	
			var characterssecond = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];
			var sstring ='';
			$.each(characterssecond,function(i,val){
				if(jQuery.inArray(val, chars)>-1){
					sstring +='<button class="alpha complete" id="char_'+val+'" data-value="'+val+'" style="margin-right: 5px;"><span>'+val+'</span></button>';
				}else{
					sstring +='<button class="alpha" id="char_'+val+'" data-value="'+val+'" style="margin-right: 5px;"><span>'+val+'</span></button>';
				}
			});
			$('.first').html(fstring);
			$('.last').html(sstring);
		}
		$(document).on('click touch','.playbutton',function(){
			var audio1 = document.getElementById('click');
			audio1.pause();
			audio1.currentTime = 0.1;
			audio1.play();
			$('#popupoverlay').fadeIn(600);
		});
		$('#errorpopupoverlay, #congratspopupoverlay,#completedpopupoverlay').hide();
		$total = 0;
		$wrong = 0;
		var backaudio = document.getElementById('backaudio');
		backaudio.volume = 0.5;
		$(document).on('click touch','[id^="char_"]',function(){
			clickedat();
			var audio1 = document.getElementById('click');
			audio1.pause();
			audio1.currentTime = 0.1;
			audio1.play();
			if(demoflag == false){
			}else{
				$total = 1;
				$wrong = 1;
				$('.complete').each(function(){
					$total += 1;
				});
				$('.wrong').each(function(){
					$wrong += 1;
				});
			}
			var newchar = $(this).data('value');
			var currentid = $('.curid').data('extra');
			var title = jsondata[currentid].title;
			var count = jsondata[currentid].count;
			var chars = jsondata[currentid].chars;
			var percent = jsondata[currentid].percent;
			var reference = jsondata[currentid].reference;
			var notation = jsondata[currentid].notation;
			if($wrong==8){
				$(this).addClass('wrong');
				$('.alpha').attr('disabled', 'disabled');
				var src = 'images/timer/timer-'+$wrong+'.png';
				$('#timer').attr('src',src);
				var newid = parseInt(currentid) + 1;
				if(newid == jsoncount){
					newid = 0;
				}
				$('.curid').data( "extra",newid);
				$('.percent').html(percent);
				$('.disease').html(title);
				$('.wraith').html(reference);
				$('.notation').html(notation);
				$('#errorpopupoverlay').fadeIn(2000);
				return false;
			}else if($total == count){
				if($(".words").hasClass('charbox_'+newchar)){
					$('.charbox_'+newchar).addClass('wordfilled');
					$('.charbox_'+newchar).val(newchar);
					$('.charbox_'+newchar).text(newchar);						
					$(this).addClass('complete');
					$(this).attr('disabled','disabled');
					var newid = parseInt(currentid) + 1;
					if(newid == jsoncount){
						newid = 0;
					}
					$('.curid').data( "extra",newid);
					$('.percent').html(percent);
					$('.disease').html(title);
					$('.wraith').html(reference);
					$('.notation').html(notation);
					if(demoflag == false){
						var jsoncount = jsondata.length;
						setTimeout(function(){
							randstring(newid);
						},4000);
					}else{
						$('#congratspopupoverlay').fadeIn(2000);
						$('.overlay').show();
					}
				}else{
					$(this).addClass('wrong');
					$(this).attr('disabled','disabled');
					var src = 'images/timer/timer-'+$wrong+'.png';
					$('#timer').attr('src',src);
				}
			}else{
				if($(".words").hasClass('charbox_'+newchar)){
					$('.charbox_'+newchar).addClass('wordfilled');
					$('.charbox_'+newchar).val(newchar);
					$('.charbox_'+newchar).text(newchar);
					$(this).addClass('complete');
					$(this).attr('disabled','disabled');
				}else{
					$(this).addClass('wrong');
					$(this).attr('disabled','disabled');
					var src = 'images/timer/timer-'+$wrong+'.png';
					$('#timer').attr('src',src);
				}
			}
				return false;
		});
		
		function unique_char(str1)
		{
			var str=str1;
			var uniql=""; 
			for (var x=0;x < str.length;x++)
			{
				if(uniql.indexOf(str.charAt(x))==-1)
				{
					uniql += str[x];  
				}
			}
			return uniql;  
		}
		$(document).on('click touch','.letsgo',function(){
			var audio1 = document.getElementById('click');
			audio1.pause();
			audio1.currentTime = 0.1;
			audio1.play();
			window.location.href='live.html';
		});
		$(document).on('click touch','.letsclose',function(){
			var audio1 = document.getElementById('click');
			audio1.pause();
			audio1.currentTime = 0.1;
			audio1.play();
			$('#popupoverlay').fadeOut(600);
		});
		function randstring(random){
			var currentid = random;
			$('.curid').data( "extra",currentid);
			var title = jsondata[currentid].title;
			var count = jsondata[currentid].count;
			var chars = jsondata[currentid].chars;
			var percent = jsondata[currentid].percent;
			var reference = jsondata[currentid].reference;
			var notation = jsondata[currentid].notation;
			var uni = unique_char(title);
			var charset = jsondata[currentid].charset;
			var htmlset = '';
			$('.middle').html(" ");
			alpha(chars);
			var singleclass = "";
			if(charset.length == 1){
				singleclass = 'single';
			}
			$(charset).each(function( index, value ){
				htmlset += '<div class="chars '+singleclass+'">';
				for (var k = 0, len = value.length; k < len; k++) {
					if(jQuery.inArray(value[k], chars)>-1){
						htmlset += '<input type="text" name="words" class="words charbox_'+value[k]+' wordfilled" value="'+value[k]+'" readonly="">';
					}else if(value[k] == ' '){
						htmlset += '<input type="text" name="words" class="words emptybox" value="" readonly="">';
					}else{
						htmlset += '<input type="text" name="words" class="words charbox_'+value[k]+'" value="" readonly="">';
					}
				}
				htmlset += '</div>';
			});
			$('.middle').html(htmlset);
			var outString = uni.replace(/\s/g, "");
			var outString = outString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			var outlen = outString.length;
			var j = -1;  
			
			function printNumbers(from, to) {
			  let current = from;
			  let timerId = setInterval(function() {
				$total = current;
				 var valuenew = outString[current-1];
					  $('#char_'+valuenew).click(); 
				if (current == to) {
				  clearInterval(timerId);
				}
				current++;
			  }, 3000);
			}
			// usage:
			printNumbers(1, outlen);
		}
 
	function demomode(){
		demoflag = false;
		var jsoncount = jsondata.length;
		var currentid = $('.curid').data('extra');
		if(currentid == jsoncount){
			currentid = 0;
		}
		randstring(currentid);
	}
	function clickedat(){
		perf1 = performance.now();
	}
	function polling(){
		perf2 = performance.now();
		perf = (perf2 - perf1)/1000;
		if(perf >=60)
		{
			demomode();
			perf1 = performance.now();
		}
		if(demoflag == true){
			setTimeout(polling,5000);
		}else{
			demomode();
		}
		
		
	}
});
