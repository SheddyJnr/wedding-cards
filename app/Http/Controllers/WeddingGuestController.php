<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeddingGuest;
use Inertia\Inertia;

class WeddingGuestController extends Controller
{
    public function index()
    {
        return Inertia::render('WeddingGuests', [
            'weddingGuests' => WeddingGuest::all()
        ]);
    }
    public function create() {}

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
        ]);

        WeddingGuest::create($validatedData);



        return redirect(route('dashboard', absolute: false))->with('success', 'Wedding guest added successfully!');
    }

    public function show($id)
    {
        // Show a specific wedding guest
    }

    public function edit($id)
    {
        // Show form to edit a specific wedding guest
    }

    public function update(Request $request, $id)
    {
        // Handle updating a specific wedding guest
    }

    public function destroy($id)
    {
        // Handle deleting a specific wedding guest
    }
}
