@extends('welcome')


@section('body')

@include('components.commercial')
@include('components.experience')
@include('components.purchase')
@include('components.team')
@include('components.working')
@include('components.price')
@include('components.events')

<!-- Modal -->
<div class="modal fade" id="fromModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div id="modalform">
                <modal-form></modal-form>
            </div>
        </div>
    </div>
</div>

@endsection