

var ObjectArray = new Array ();
ObjectArray[1] = "mainslide_01.jpg";
ObjectArray[2] = "mainslide_02.jpg"
ObjectArray[3] = "mainslide_03.jpg";

var obTimeOut;
var count = 0;	

var element=document.getElementById("header");

function ShowDefaultRotate() // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
{
	count++;

	if( count < ObjectArray.length )  // 배열의 갯수 이내일때만 실행
	{
        element.style.backgroundImage= "url("+ObjectArray[count]+")";	 
		obTimeOut = setTimeout("ShowDefaultRotate()",1000);  // 1초후에 자기자신을 호출 
	}
	else
	{
		count=0; // 카운트 초기화 
        ShowDefaultRotate();//카운트 초기화 후 자기자신 호출
	}		
}


function startAnimation()
{
    obTimeOut = window.setTimeout(ShowDefaultRotate,100); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
}


window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행


//출처: https://doolyit.tistory.com/106 [동해둘리의 IT Study]