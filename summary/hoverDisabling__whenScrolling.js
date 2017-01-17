/**
 * Created by DEPyTAT on 18.01.2017.
 */
//  .disable-hover {
//      pointer-events: none;
//  }

//������ ��������� ���� ����� � ������ body �� ������ ������, � ��� � ���� ����������!

var body = document.body,
    timer;

window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
    }

    timer = setTimeout(function(){
        body.classList.remove('disable-hover')
    },500);
}, false);

//   ���, ��� ������, �������� �������. ������ ���������� �� ������� ������, � ������� ������ ���������� ���������� ������, ��������� ������� ������ �� ����� body, �, ���� ��� ��� � ���������. ����� ������ ��������� ����� ������, �������, ����� ��� ������� ����� ��������� ������, ������� ��� �����. ���!
//
//    �����
//
//   ���� ���-�� � �������� ����� �������� �� ������ pointer-events: auto, ��� �������� ���������� �����, � ����� ��� ��� ���������. �� �� �� ����� �����, �����?
//
//  .disable-hover,
//  .disable-hover * {
//      pointer-events: none !important;
//  }
//
//  ��� �� ����������, �������, ��� ��, �������. �����-���������� * � ������ !important �� ������ ���� �������� ����� ���� ������.