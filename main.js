$(document).ready(function(){

	$('#example').DataTable({

		language:{
			"lengthMenu":"Mostrar _MENU_ registros",
			"zeroRecords":"no se encontraron resultados",
			"info":"Mostrando registros del _START_ al _END_  de un total de _TOTAL_ registros ",
			"infoEmpty":"Mostrando registros del 0 al 0 de un total de 0 reistros",
			"infoFiltered":"(filtrado de un total de _MAX_ registros)",
			"sSearch":"Buscar:",
			"oPaginate":{
				"sFirst":"Primero",
				"sLast":"Ultimo",
				"sNext": "Siguiente",
				"sPrevious": "Anterior"	
				},
				"sProcessing":"Procesando...",

		},
		//para usar los botones
		responsive:"true",
		dom:'Bfrtilp',
		buttons:[
			{
				extend:'excelHtml5',
				text:'<i class="far fa-file-excel"></i>',
				tittleAttr:'Exportar a Excel',
				className:'btn btn-success'
			},
			{
				extend:'pdfHtml5',
				text:'<i class="fas fa-file-pdf"></i>',
				tittleAttr:'Exportar a PDF',
				className:'btn btn-danger'
			},
			{
				extend:'print',
				text:'<i class="fas fa-print"></i>',
				tittleAttr:'imprimir',
				className:'btn btn-info'
			}


		]


	});
});