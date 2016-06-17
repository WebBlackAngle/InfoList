window.onload=function(){
	var listBtn=document.getElementById('btn1');
	var carBtn=document.getElementById('btn2');
	listBtn.onclick=function(){
		this.className="btn-list-on";
		carBtn.className="btn-car-off";
		var imgs=document.getElementsByTagName('img');
		var k=0;
		for (var i = 0; i < imgs.length; i++) {
			if(!(i%4)){
				k=1;
			}else{
				k++;
			}
			imgs[i].src="images/"+k+"s.jpg";
			imgs[i].parentNode.className="a-img small";
		}
	};
	carBtn.onclick=function(){
		this.className="btn-car-on";
		listBtn.className="btn-list-off";
		var imgs=document.getElementsByTagName('img');
		var k=0;
		for (var i = 0; i < imgs.length; i++) {
			if(!(i%4)){
				k=1;
			}else{
				k++;
			}
			imgs[i].src="images/"+k+".jpg";
			imgs[i].parentNode.className="a-img";
		}
	};
};