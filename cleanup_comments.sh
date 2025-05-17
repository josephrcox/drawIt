#!/bin/bash

# This script removes comments that simply describe what the code does
# while preserving comments that provide necessary context

# Main files to clean
files_to_clean=(
  "src/lib/DevMenu.svelte"
  "src/lib/Firebase.ts"
  "src/lib/utils.ts"
  "src/lib/GameOver.svelte"
  "src/lib/special_cards.ts"
  "src/App.svelte"
  "src/lib/Board.svelte"
  "src/lib/Card.svelte"
  "src/lib/Nux.svelte"
  "src/lib/defaults.ts"
  "src/lib/Deck.svelte"
)

# List of comments to preserve (add regex patterns for important comments here)
preserved_comments=(
  "Firestore batches can handle at most 500 operations"
  "This avoids any issues with complex objects that can't be serialized"
)

for file in "${files_to_clean[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Create temp file
    temp_file=$(mktemp)
    
    # Process the file line by line
    while IFS= read -r line; do
      # Check if the line is a simple comment (starts with optional whitespace and //)
      if [[ "$line" =~ ^[[:space:]]*//[[:space:]]+ ]]; then
        # Check if this is a comment we want to preserve
        preserve=false
        for preserved in "${preserved_comments[@]}"; do
          if [[ "$line" == *"$preserved"* ]]; then
            preserve=true
            break
          fi
        done
        
        # If it's not a comment to preserve, skip it
        if [ "$preserve" = false ]; then
          continue
        fi
      fi
      
      # Otherwise, write the line to the temp file
      echo "$line" >> "$temp_file"
    done < "$file"
    
    # Replace the original file with the temp file
    mv "$temp_file" "$file"
  else
    echo "File $file not found, skipping."
  fi
done

echo "Comment cleanup complete!"
