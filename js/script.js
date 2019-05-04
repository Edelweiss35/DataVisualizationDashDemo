$('.empty-survey-list').hide();
$('.content-survey-list').hide();
$('.draft-survey-list').hide()
$('.pending-approval-survey-list').hide()
$('.button-text-create, .create-new-survey').click(function () {
	$('.content').addClass('fadeOut')
	setTimeout(function () {
		$('.content').hide()
	},200)
	$('.content-survey-list').show()
})

$('.home-floating-icons').click(function () {
	$(this).parent().hide()
	$('.content').removeClass('fadeOut')
	$('.content').css('display', 'block')
})

 $( function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );

$('.button-text-draft, .draft-survey').click(function () {
	$('.content').addClass('fadeOut')
	setTimeout(function () {
		$('.content').hide()
	},200)
	$('.draft-survey-list').show()
})

$('.button-text-pending-approval, .pending-approval').click(function () {
	$('.content').addClass('fadeOut')
	setTimeout(function () {
		$('.content').hide()
	},200)
	$('.pending-approval-survey-list').show()
})

$('.button-text-pending-payment, .pending-payment').click(function () {
	$('.content').addClass('fadeOut')
	setTimeout(function () {
		$('.content').hide()
	},200)
	$('.empty-survey-list').show()
})

$('.button-text-active-survey, .active-survey').click(function () {
	$('.content').addClass('fadeOut')
	setTimeout(function () {
		$('.content').hide()
	},200)
	$('.empty-survey-list').show()
})

