var editor =
	{
	 filename: ''
	,form: undefined
	,text: undefined
	,save: function(  )
		{
		if( this.filename != '' )
			{
			var request = new XMLHttpRequest(  );
			var form = new FormData( this.form );
			form.append( 'command', 'save' );
			form.append( 'filename', this.filename );
			form.append( 'text', this.text.element.value );
			request.editor = this;
			request.addEventListener
				(
				 'load'
				,function( event )
					{
					if( this.status != 200 )
						{
						alert( "Can't save file " + this.editor.filename );
						return( false );
						}
					return( true );
					}
				);
			request.open( 'post', this.form.action );
			request.send( form );
			return( true );
			}
		return( false );
		}
	,load: function(  )
		{
		if( this.filename != '' )
			{
			var request = new XMLHttpRequest(  );
			var form = new FormData( this.form );
			form.append( 'command', 'load' );
			form.append( 'filename', this.filename );
			request.editor = this;
			request.addEventListener
				(
				 'load'
				,function( event )
					{
					if( this.status != 200 )
						{
						alert( "Can't load file " + this.editor.filename );
						return( false );
						}
					this.editor.text.element.value  = this.responseText;
					this.editor.text.element.selectionStart = 0;
					this.editor.text.element.selectionEnd = 0;
					this.editor.text.element.scrollLeft = 0;
					this.editor.text.element.scrollTop = 0;
					return( true );
					}
				);
			request.open( 'post', this.form.action );
			request.send( form );
			return( true );
			}
		return( false );
		}
	,jump: function( number )
		{
		number = parseInt( number, 10 );
		if( number != NaN )
			{
			var line = 1, position = 0;
			while( line < number && position < this.text.element.value.length )
				{
				if( this.text.element.value.charAt( position ) == "\n" )
					line++;
				position++;
				}
			if( line == number )
				{
				this.text.element.selectionStart = position;
				this.text.element.selectionEnd = position;
				return( true );
				}
			}
		return( false );
		}
	,position: function(  )
		{
                                                                              /*
		Параметры для изменения положения и размеров строки ввода
                                                                              */
		var inputVerticalShift = 55;   // Cдвиг вверх относительно центра
		var inputSideSpace = 100;      // Добавляет по бокам пустое пространство
                                                                              /*
		Максимизируем textarea во внутреннем пространстве window 
                                                                              */		
		this.text.element.cols = 1;
		while( this.text.element.offsetWidth < window.innerWidth )
			this.text.element.cols += 1;
		this.text.element.cols -= 1;
		
		this.text.element.rows = 1;
		while( this.text.element.offsetHeight < window.innerHeight )
			this.text.element.rows += 1;
		this.text.element.rows -= 1;
                                                                              /*
		Центрируем textarea во внутреннем пространстве window
                                                                              */		
		var difference = window.innerWidth - this.text.element.offsetWidth;
		this.text.element.style.left = ( ( difference - difference % 2 ) / 2 ).toString(  ) + 'px';
		
		var difference = window.innerHeight - this.text.element.offsetHeight;
		this.text.element.style.top = ( ( difference - difference % 2 ) / 2 ).toString(  ) + 'px';
                                                                              /*
		Максимизируем input  во внутреннем пространстве window
                                                                              */
		this.string.element.size = 1;
		while( this.string.element.offsetWidth < ( window.innerWidth - inputSideSpace ) )
			this.string.element.size += 1;
		this.string.element.size -= 1;
                                                                              /*
		Центрируем input  во внутреннем пространстве window
                                                                              */
		var difference = window.innerWidth - this.string.element.offsetWidth;
		this.string.element.style.left = ( ( difference - difference % 2 ) / 2 ).toString(  ) + 'px';
		
		var difference = window.innerHeight - this.string.element.offsetHeight;
		this.string.element.style.top = ( ( difference - difference % 2 ) / 2 - inputVerticalShift ).toString(  ) + 'px';
		}
	};